import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {ForumCatComponent} from './forum/forum-cat/forum-cat.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {SubbarComponent} from './subbar/subbar.component';

@NgModule({
  declarations: [MainHeaderComponent, SubbarComponent, ForumCatComponent],
  exports: [MainHeaderComponent, SubbarComponent, ForumCatComponent],
  imports: [IonicModule, RouterModule, CommonModule],
})
export class ComponentsModule { }
