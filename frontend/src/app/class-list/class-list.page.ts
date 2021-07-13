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
  private mission: (string | string[])[] = ["-1", "You got a sudden quest", ["Enter the quest to earn currency", "GOD", "Unknown", "-1"]];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private classService: ClassService) { }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('id');
    this.list = this.classService.LoadClass(this.title);

    if (this.getRandomInt(50) == this.getRandomInt(2)) { //appear rate is 1/100 try
      this.list.splice(this.getRandomInt(this.list.length), 0, this.mission);
    }
  }

  createPost() {
    this.router.navigate(['test']);
  }

  navItems = [
    {title: 'Lmgtplatform', url: '/learningmgtplatform', icon: 'layers'},
    {title: 'Forum', url: '/forum', icon: 'chatbox-ellipses-outline'}
  ];
}
