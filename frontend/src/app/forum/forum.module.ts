import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {ForumCatComponent} from '../forum-cat/forum-cat.component';
import {ForumPageRoutingModule} from './forum-routing.module';
import {ForumPage} from './forum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ForumPage, ForumCatComponent],
})
export class ForumPageModule {}
