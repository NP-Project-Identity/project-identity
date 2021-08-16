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
      id: "-1", email: "-1", password: "-1", name: "GOD", coin: -1, achievement: {
        medal: [], trophy: []
      },
      resource: {
        profile: "quest.png", bg: "default.jpg"
      }
    },
    { //password is abcde
      id: "s101123451d", email: "s10112345@connect.np.edu.sg", password: "ab56b4d92b40713acc5af89985d4b786", name: "Alan Tan", coin: 0, achievement: {
        medal: [{id: "dailyLogin", rank: 1}, {id: "comment", rank: 1}, {id: "feeder", rank: 1}, {id: "poster", rank: 1}], trophy: ["Poster 2021", "Comment 2021", "Helper 2021"]
      },
      resource: {
        profile: "default.png", bg: "s10198161d.jpg"
      }
    },
    {//password is abc
      id: "s101123451j", email: "a@a.com", password: "900150983cd24fb0d6963f7d28e17f72", name: "Rifa Achrinza", coin: 10, achievement: {
        medal: [{id: "dailyLogin", rank: 1}, {id: "comment", rank: 1}, {id: "feeder", rank: 1}, {id: "poster", rank: 1}], trophy: ["Poster 2021", "Comment 2021"]
      },
      resource: {
        profile: "default.png", bg: "default.jpg"
      }
    },
  ]
  authenticationState = new BehaviorSubject(false)

  constructor(private storage: Storage, private plt: Platform) {
  }

  async checkToken() {
    await this.storage.create();
    await this.storage.get(TOKEN_KEY).then(res => {
      if (res != undefined) {
        this.setUser(res);
        this.authenticationState.next(true);
      }
    })
    return this.authenticationState.value;
  }

  async login(email: string, pass: string) {
    await this.storage.create();
    let emails = this.userDB.find(el => el.email === email.toLowerCase());
    if (email == undefined || email == null) {
      return false;
    }
    else if (emails.password != pass) {
      return false;
    }
    else {
      await this.storage.set(TOKEN_KEY, emails.id).then(() => {
        this.authenticationState.next(true);
        this.setUser(emails.id);
      });
      return this.authenticationState.value;
    }
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.removeUser();
      this.authenticationState.next(false);
    });
  }

  async isAuthenticated() {
    return await this.checkToken();
    //return await this.authenticationState.value;
  }

  async setUser(id: string) {
    this.currentUser = await this.userDB.find(el => el.id === id);
  }
  addCoin(coin: number) {
    return this.currentUser.coin += coin;
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
  getUserImg(user?: string) {
    if (user == undefined) {
      return this.currentUser.resource.profile;
    }
    else {
      return this.userDB.find(el => el.name === user).resource.profile;
    }
  }
  getUserBG() {
    return this.currentUser.resource.bg;
  }
}
