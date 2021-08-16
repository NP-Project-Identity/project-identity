import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {ForumCreatePage} from './forum-create/forum-create.page';
import {ForumListPageRoutingModule} from './forum-list-routing.module';
import {ForumListPage} from './forum-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumListPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [ForumListPage, ForumCreatePage],
})
export class ForumListPageModule { }
