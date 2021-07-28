import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {ForumCommentPageRoutingModule} from './forum-comment-routing.module';
import {ForumCommentPage} from './forum-comment.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumCommentPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [ForumCommentPage]
})
export class ForumCommentPageModule { }
