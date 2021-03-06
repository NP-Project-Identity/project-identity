import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClassService} from '../services/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.page.html',
  styleUrls: ['./class-list.page.scss'],
})
export class ClassListPage implements OnInit {
  public title: string;
  public list: any;
  private mission = {
    title: 'You got a sudden quest',
    desc: 'Enter the quest to earn currency',
    type: 'quest',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private classService: ClassService,
  ) {}

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit() {}
  ionViewWillEnter() {
    this.title = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.activatedRoute.snapshot.parent.params.id == this.title) {
      this.list = this.classService.LoadClass(this.title);
    } else {
      this.list = this.classService.LoadClassContent(
        this.title,
        this.activatedRoute.snapshot.parent.params.id,
      );
    }
    if (
      this.list.find(el => el.title == 'You got a sudden quest') != undefined
    ) {
      this.list = this.list.filter(function (el) {
        return el.title != 'You got a sudden quest';
      });
    }
    if (
      this.getRandomInt(2) == this.getRandomInt(2) &&
      this.list.find(el => el.title == 'You got a sudden quest') == undefined
    ) {
      //appear rate is 1/100 try
      this.list.splice(this.getRandomInt(this.list.length), 0, this.mission);
    }
  }

  routeLink(page: string) {
    if (page == 'You got a sudden quest') return '-1';
    else return page;
  }

  checkType(type: string, isType: string) {
    if (type == isType) {
      return true;
    } else return false;
  }

  navItems = [
    {title: 'Lmgtplatform', url: '/learningmgtplatform', icon: 'layers'},
    {title: 'Forum', url: '/forum', icon: 'chatbox-ellipses-outline'},
  ];
}
