import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ForumCatComponent} from '../forum-cat/forum-cat.component';
import {MainHeaderComponent} from '../main-header/main-header.component';
import {ForumPageRoutingModule} from './forum-routing.module';
import {ForumPage} from './forum.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumPageRoutingModule
  ],
  declarations: [ForumPage, MainHeaderComponent,ForumCatComponent]
})
export class ForumPageModule {}
