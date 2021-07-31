import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage-angular';
import {BehaviorSubject} from 'rxjs';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser;
  private userDB = [
    {
      id: "s10198161d", email: "s10198161@connect.np.edu.sg", password: "abcde", name: "Alan Tan", achievement: {
        medal: [{id: "dailyLogin", rank: 1}, {id: "comment", rank: 1}, {id: "feeder", rank: 1}, {id: "poster", rank: 1}], trophy: ["Poster 2021", "Comment 2021", "Helper 2021"]
      }
    },
    {
      id: "s10198161b", email: "a@a.com", password: "abc", name: "Rifa Achrinza", achievement: {
        medal: [{id: "dailyLogin", rank: 1}, {id: "comment", rank: 1}, {id: "feeder", rank: 1}, {id: "poster", rank: 1}], trophy: ["Poster 2021", "Comment 2021", "Helper 2021"]
      }
    },
  ]
  authenticationState = new BehaviorSubject(false)

  constructor(private storage: Storage, private plt: Platform) {
    this.storage.create();
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.storage.get(TOKEN_KEY).then(data => this.setUser(data));
        this.authenticationState.next(true);
      }
    })
  }

  login(email: string, pass: string) {
    let emails = this.userDB.find(el => el.email === email);
    if (email == undefined || email == null) {
      return false;
    }
    else if (emails.password != pass) {
      return false;
    }
    else {
      this.currentUser = emails;
      return this.storage.set(TOKEN_KEY, emails.id).then(() => {
        this.storage.get(TOKEN_KEY).then(data => this.setUser(data));
        this.authenticationState.next(true);
      });
    }
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.removeUser();
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  setUser(id: string) {
    this.currentUser = this.userDB.find(el => el.id === id);
  }
  removeUser() {
    this.currentUser = undefined;
  }
  getMedal() {
    return this.currentUser.achievement.medal;
  }
  getTrophy() {
    return this.currentUser.achievement.trophy;
  }
  getUserName() {
    return this.currentUser.name;
  }
  getUserID() {
    return this.currentUser.id;
  }
}
