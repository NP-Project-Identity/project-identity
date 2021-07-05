import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ForumService} from '../services/forum.service';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.page.html',
  styleUrls: ['./forum-list.page.scss'],
})
export class ForumListPage implements OnInit {
  public title: string;
  public list: (string | string[])[][];
  private mission: (string | string[])[] = ["-1", "You got a sudden quest", ["Enter the quest to earn currency", "GOD", "Unknown", "-1"]];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private forumService: ForumService) { }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('id');
    this.list = this.forumService.loadList(this.title);
    if (this.getRandomInt(50) == this.getRandomInt(2)) { //appear rate is 1/100 try
      this.list.splice(this.getRandomInt(this.list.length), 0, this.mission);
    }
  }

  createPost() {
    this.router.navigate(['test']);
  }
}
