import {Injectable} from '@angular/core';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private userDB = [
    {
      id: "s10198161d", bg: "1", pet: "1", level: 1, exp: 0, energy: 10, hunger: 100, lastFeed: "1/7/2021 09:01:00", lastEnergy: "1/7/2021 09:01:00"
    },
    {
      id: "s10198161b", bg: "1", pet: "1", level: 1, exp: 14, energy: 10, hunger: 100, lastFeed: "1/7/2021 09:01:00", lastEnergy: "1/7/2021 09:01:00"
    }
  ]
  private levelDB = [
    {level: 1, maxExp: 15},
    {level: 2, maxExp: 20},
    {level: 3, maxExp: 25},
    {level: 4, maxExp: 30},
    {level: 5, maxExp: 35},
    {level: 6, maxExp: 40},
  ]

  constructor(private auth: UserService) { }
  private getUser() {
    return this.userDB.find(el => el.id === this.auth.getUserID())
  }
  getLevel() {
    return this.getUser().level.toString();
  }
  getExp() {
    return (this.levelDB.find(el => el.level === this.getUser().level).maxExp - this.getUser().exp)
  }
  getExpProgress() {
    return (this.getUser().exp / this.levelDB.find(el => el.level === this.getUser().level).maxExp * 100)
  }
  levelUp() {
    return true;
  }
}
