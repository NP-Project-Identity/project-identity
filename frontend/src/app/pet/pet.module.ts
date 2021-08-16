import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PetInvPage} from './pet-inv/pet-inv.page';
import {PetPageRoutingModule} from './pet-routing.module';
import {PetPage} from './pet.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetPageRoutingModule
  ],
  declarations: [PetPage, PetInvPage]
})
export class PetPageModule { }
