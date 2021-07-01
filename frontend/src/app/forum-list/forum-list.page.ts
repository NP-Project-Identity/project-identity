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
  public list: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private forumService: ForumService) {}

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('id');
    this.list = this.forumService.loadList(this.title);
  }

  createPost() {
    this.router.navigate(['test']);
  }
}
