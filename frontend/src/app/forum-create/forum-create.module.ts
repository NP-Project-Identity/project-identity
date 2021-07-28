import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {ForumCreatePageRoutingModule} from './forum-create-routing.module';
import {ForumCreatePage} from './forum-create.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumCreatePageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [ForumCreatePage]
})
export class ForumCreatePageModule { }
