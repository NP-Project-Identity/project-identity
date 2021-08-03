import {Injectable} from '@angular/core';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private userDB = [
    {
      id: "s10198161d", bg: "1", pet: "1", level: 1, exp: 0, hunger: 100, sleep: false, lastSleep: Date.now(), selectedFood: "apple", inv: {
        pets: [{pet: "1"}], food: [{name: "Apple", amount: 2}, {name: "Banana", amount: 5}]
      }
    },
    {
      id: "s10198161b", bg: "1", pet: "1", level: 1, exp: 14, hunger: 100, sleep: false, lastSleep: Date.now(), selectedFood: "banana", inv: {
        pets: [{pet: "1"}, {pet: "1"}, {pet: "1"}, {pet: "1"}, {pet: "1"}, {pet: "1"}], food: [{name: "apple", amount: 2}, {name: "banana", amount: 5}]
      }
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
  getPet() {
    return this.getUser().pet;
  }
  getPetBG() {
    return this.getUser().bg;
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
  getHunger() {
    return (this.getUser().hunger)
  }
  levelUp() {
    return true;
  }
  findMaxExp() {
    return this.levelDB.find(el => el.level === this.getUser().level).maxExp;
  }
  setExp(exp: number) {
    let newExp = this.getUser().exp + exp;
    while (newExp >= this.findMaxExp()) {
      newExp = newExp - this.findMaxExp();
      this.getUser().level += 1;
    }
    this.getUser().exp = newExp;
  }
  setHunger(hunger: number) {
    if (this.getUser().hunger + hunger >= 100) {
      this.getUser().hunger = 100
    }
    else {
      this.getUser().hunger += hunger
    }
  }
  getSleep() {
    return this.getUser().sleep;
  }
  setSleep() {
    this.getUser().sleep = true;
    this.getUser().lastSleep = Date.now();
  }
  endSleep() {
    this.getUser().sleep = false;
    return Math.floor((Date.now() - this.getUser().lastSleep) / 60000);
  }
  getInv(type: string) {
    if (type == "pets")
      return this.getUser().inv.pets;
    else if (type == "food")
      return this.getUser().inv.food;
  }
  setPet(petID: string) {
    if (this.getUser().inv.pets.find(el => el.pet === petID)) {
      this.getUser().pet = petID;
    }
  }
  setFood(food: string) {
    this.getUser().selectedFood = food;
  }
}
