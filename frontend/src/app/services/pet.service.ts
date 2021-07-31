import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private userDB = [
    {
      id: "s10198161d", bg: "1", pet: "1", level: 0, exp: 0, energy: 10, hunger: 100, lastFeed: "1/7/2021 09:01:00", lastEnergy: "1/7/2021 09:01:00"
    },
    {
      id: "s10198161b", bg: "1", pet: "1", level: 0, exp: 0, energy: 10, hunger: 100, lastFeed: "1/7/2021 09:01:00", lastEnergy: "1/7/2021 09:01:00"
    }
  ]

  constructor() { }
}
