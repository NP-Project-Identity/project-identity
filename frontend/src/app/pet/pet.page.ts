import {Component, OnInit} from '@angular/core';
import {PetService} from '../services/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.page.html',
  styleUrls: ['./pet.page.scss'],
})
export class PetPage implements OnInit {
  public level;
  public rExp;
  public perExp;

  constructor(private pet: PetService) { }

  ngOnInit() {
    this.level = this.pet.getLevel();
    this.rExp = this.pet.getExp();
    this.perExp = this.pet.getExpProgress();
    console.log(this.perExp);
  }
}
