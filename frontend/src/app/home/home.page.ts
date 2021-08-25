import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, MenuController} from '@ionic/angular';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public username;
  navItems = [
    {title: 'Lmgtplatform', url: '../learningmgtplatform', icon: 'layers'},
    {title: 'Forum', url: '../forum', icon: 'chatbox-ellipses-outline'},
  ];
  modules = [
    {name: 'All'},
    {name: 'Capstone'},
    {name: 'EH'},
    {name: 'FP3'},
    {name: 'NS'},
    {name: 'ISProid'},
  ];
  tasks = [
    {
      name: 'ISProid',
      desc: 'Prototype & E-Poster',
      color: '#FA0000',
      deadline: '3d',
    },
    {name: 'EH', desc: 'EH Assignment', color: '#FA0000', deadline: '5d'},
    {
      name: 'Capstone',
      desc: 'Capstone Assignment',
      color: '#FA4B00',
      deadline: '1w',
    },
    {name: 'FP3', desc: 'FP3 Pair Interview', color: '#FA4B00', deadline: '1w'},
    {name: 'NS', desc: 'NS Group Assignment', color: '#FA4B00', deadline: '1w'},
    {
      name: 'NS',
      desc: 'NS Individual Assignment',
      color: '#FA4B00',
      deadline: '1w',
    },
    {name: 'NS', desc: 'NS CA2 Test', color: '#FA4B00', deadline: '1w'},
    {name: 'NS', desc: 'NS Final Test', color: '#7E7E7E', deadline: '2w'},
    {name: 'EH', desc: 'EH Practical Test 2', color: '#ABABAB', deadline: '3w'},
  ];
  news = [
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
    {
      title: 'TCP',
      content:
        'Invitation to attend 2 online Lectures by distinguished speakers: "An Innovative Economy" by Mr Ravi Menon and "The US-China Relationship: From Conflict to Resolution" by Mr Stephen Roach!',
    },
  ];
  selectedtasks = [];
  selectednews = [];
  newslength: number;
  tasklength: number;
  selectedmod: string;

  constructor(
    private userService: UserService,
    public menuCtrl: MenuController,
  ) {
    this.newslength = 0;
    this.tasklength = 7;
    this.selectedmod = '';
    this.appendNews(6);
    this.selectTasks(this.selectedmod);
  }
  async ngOnInit() {
    this.username = await this.userService.getUserName();
    this.menuCtrl.enable(true);
  }
  list = document.getElementById('list');
  loadNews(event) {
    setTimeout(() => {
      if (this.newslength < this.news.length) {
        console.log('Loading Data...');
        this.appendNews(2);
        event.target.complete();
        console.log('done');
      } else {
        console.log('No news left');
        event.target.disabled = true;
        event.target.complete();
      }
    }, 1000);
  }
  appendNews(number) {
    const olength = this.newslength;
    for (let i = 0; i < number; i++) {
      this.selectednews.push(this.news[i + olength]);
      this.newslength++;
    }
  }
  filterTasks(event) {
    this.selectedtasks = [];
    this.selectedmod = event.srcElement.id;
    this.selectTasks(this.selectedmod);
  }
  selectTasks(selectedmod) {
    const maxlength = this.tasklength;
    if (selectedmod == '' || selectedmod == 'All') {
      for (var i = 0; i < maxlength; i++) {
        this.selectedtasks.push(this.tasks[i]);
      }
    } else {
      var i = 0;
      let v = 0;
      while (i < maxlength && v < this.tasks.length) {
        if (this.tasks[v].name == selectedmod) {
          this.selectedtasks.push(this.tasks[v]);
          i++;
        }
        v++;
      }
    }
  }
}
