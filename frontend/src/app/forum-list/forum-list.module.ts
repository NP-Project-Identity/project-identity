import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {ForumListPageRoutingModule} from './forum-list-routing.module';
import {ForumListPage} from './forum-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumListPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ForumListPage],
})
export class ForumListPageModule {}
