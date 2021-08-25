import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AnimationController} from '@ionic/angular';
import {PetService} from '../services/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.page.html',
  styleUrls: ['./pet.page.scss'],
})
export class PetPage implements OnInit {
  public petID;
  public petBG;
  public level;
  public rExp;
  public perExp;
  public hunger;
  public sleeping = 'none';
  public error;
  private animation = false;

  @ViewChild('pet', {read: ElementRef}) petObj: ElementRef;

  constructor(
    private pet: PetService,
    private router: Router,
    private animationCtrl: AnimationController,
  ) {}

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  ngOnInit() {
    this.petID = this.pet.getPet();
    this.petBG = '../../assets/game/bg/' + this.pet.getPetBG() + '.jpg';
    this.reloadStat();
  }
  reloadStat() {
    this.level = this.pet.getLevel();
    this.rExp = this.pet.getExp();
    this.perExp = this.pet.getExpProgress();
    this.hunger = this.pet.getHunger();
    if (this.pet.getSleep()) {
      this.sleeping = 'red solid 4px';
    } else {
      this.sleeping = 'none';
    }
  }
  onPlay() {
    if (this.hunger >= 10 && !this.animation) {
      this.animation = true;
      this.pet.setHunger(-10);
      this.pet.setExp(1);
      this.reloadStat();
      const loadingAnimation = this.animationCtrl
        .create('play-animation')
        .addElement(this.petObj.nativeElement)
        .duration(300)
        .iterations(2)
        .direction('alternate')
        .fromTo('transform', 'rotate(0deg)', 'rotate(40deg)');
      loadingAnimation.play();
      setTimeout(() => {
        this.animation = false;
      }, 385);
    } else if (this.animation) return;
    else {
      this.errorMsg('Pet is low on hunger');
    }
  }
  onFeed() {
    if (this.hunger <= 90 && this.pet.checkFood() && !this.animation) {
      this.pet.reduceInvFoodAmt();
      this.pet.setHunger(this.getRandomInt(2, 5));
      this.reloadStat();
      const loadingAnimation = this.animationCtrl
        .create('feed-animation')
        .addElement(this.petObj.nativeElement)
        .duration(400)
        .iterations(2)
        .keyframes([
          {offset: 0, transform: 'scale(1))', opacity: '1'},
          {offset: 0.5, transform: 'scale(1.2)', opacity: '0.8'},
          {offset: 1, transform: 'scale(1)', opacity: '1'},
        ]);
      loadingAnimation.play();
      setTimeout(() => {
        this.animation = false;
      }, 450);
    } else if (this.animation) return;
    else if (!this.pet.checkFood()) this.errorMsg('Run out of food');
    else this.errorMsg('Pet is too full to eat');
  }
  onSleep() {
    if (this.pet.getSleep()) {
      const t = this.pet.endSleep();
      if (t > 0) {
        this.pet.setHunger(1);
      }
    } else {
      this.pet.setSleep();
    }
    this.reloadStat();
  }
  errorMsg(err: string) {
    this.error = err;
    document.getElementById('error').setAttribute('style', 'display:block');
    setTimeout(function () {
      document.getElementById('error').setAttribute('style', 'display:none');
    }, 5000);
  }
}
