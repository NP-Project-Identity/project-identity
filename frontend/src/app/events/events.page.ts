import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(public menuCtrl: MenuController) {
  }

  ngOnInit() {
  }

}
