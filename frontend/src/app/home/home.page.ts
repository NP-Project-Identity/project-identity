import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  navItems = [
    { title: 'Lmgtplatform', url: '../learningmgtplatform', icon: 'layers' },
    { title: 'Forum', url: '../forum', icon: 'chatbox-ellipses-outline' }
  ];
  modules = [
    {name: 'Capstone'},
    {name: 'EH'},
    {name: 'FP3'},
    {name: 'NS'},
    {name: 'ISProid'}
  ];
  news = [
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'},
    {title: 'TCP', content: 'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!'}
  ];
  selectednews = [
  ];
  newslength: number;

  constructor() {
    this.newslength = 0;
    this.appendNews(6);
  }
  ngOnInit() {
  }
  list = document.getElementById('list');
  loadNews(event) {
    setTimeout(() => {
      if (this.newslength < this.news.length) {
        console.log('Loading Data...');
        this.appendNews(2);
        event.target.complete();
        console.log('done');
      }
      else {
        console.log('No news left');
        event.target.disabled = true;
        event.target.complete();
      }
    }, 1000);
  }
  appendNews(number) {
    const olength = this.newslength;
    for (var i = 0; i < number; i++) {
      this.selectednews.push(this.news[i + olength])
      this.newslength++;
  }
}}
