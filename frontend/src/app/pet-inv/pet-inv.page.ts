import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {PetService} from '../services/pet.service';

@Component({
  selector: 'app-pet-inv',
  templateUrl: './pet-inv.page.html',
  styleUrls: ['./pet-inv.page.scss'],
})
export class PetInvPage implements OnInit {
  public invType;
  public petBG;
  public inv;

  constructor(private pet: PetService, private navCtrl: NavController) { }

  ngOnInit() {
    this.petBG = "../../assets/game/bg/" + this.pet.getPetBG() + ".jpg";
    this.inv = this.pet.getInv("pets");
    this.invType = "pets";
  }
  back() {
    this.navCtrl.back();
  }
  onPet() {
    this.invType = "pets";
    this.inv = this.pet.getInv("pets");
  }
  onFood() {
    this.invType = "food"
    this.inv = this.pet.getInv("food");
  }
  selectPet(petID: string) {
    this.pet.setPet(petID);
    this.navCtrl.back();
  }
  selectFood(food: string) {
    this.pet.setFood(food);
    this.navCtrl.back();
  }
}
