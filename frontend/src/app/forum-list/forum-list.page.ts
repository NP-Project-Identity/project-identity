import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.page.html',
  styleUrls: ['./forum-list.page.scss'],
})
export class ForumListPage implements OnInit {
  public title: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('id');
  }

  createPost() {
    this.router.navigate(['test']);
  }
}
