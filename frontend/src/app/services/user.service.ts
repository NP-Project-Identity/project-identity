import {Injectable} from '@angular/core';

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
    }
  ]

  constructor() { }
  setUser(email: string, pass: string) {
    let emails = this.userDB.find(el => el.email);
    if (email == undefined || email == null) {
      return false;
    }
    else if (emails.password != pass) {
      return false;
    }
    else {
      this.currentUser = emails;
      return true;
    }
  }
  getMedal() {
    this.setUser("s10198161@connect.np.edu.sg", "abcde") //TO BE REMOVE
    return this.currentUser.achievement.medal;
  }
  getTrophy() {
    this.setUser("s10198161@connect.np.edu.sg", "abcde") //TO BE REMOVE
    return this.currentUser.achievement.trophy;
  }
}
