import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {SubbarComponent} from '../subbar/subbar.component';
import {HomePageRoutingModule} from './home-routing.module';
import {HomePage} from './home.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [HomePage, SubbarComponent]
})
export class HomePageModule {}
