import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetInvPageRoutingModule } from './pet-inv-routing.module';

import { PetInvPage } from './pet-inv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetInvPageRoutingModule
  ],
  declarations: [PetInvPage]
})
export class PetInvPageModule {}
