import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {ForumCommentPage} from './forum-comment/forum-comment.page';
import {ForumContentPageRoutingModule} from './forum-content-routing.module';
import {ForumContentPage} from './forum-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumContentPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [ForumContentPage, ForumCommentPage],
})
export class ForumContentPageModule {}
