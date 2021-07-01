import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {ForumContentPageRoutingModule} from './forum-content-routing.module';
import {ForumContentPage} from './forum-content.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumContentPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ForumContentPage]
})
export class ForumContentPageModule {}
