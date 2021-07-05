import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ForumService} from '../services/forum.service';

@Component({
  selector: 'app-forum-content',
  templateUrl: './forum-content.page.html',
  styleUrls: ['./forum-content.page.scss'],
})
export class ForumContentPage implements OnInit {
  private id: string;
  private cat: string;
  public title: string;
  public postList: any;

  constructor(private activatedRoute: ActivatedRoute, private forumService: ForumService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cat = this.activatedRoute.snapshot.parent.parent.paramMap.get('id');
    this.postList = this.forumService.loadPost(this.cat, this.id);
    this.title = this.postList[1];
    this.postList = this.postList.slice(2);
  }

}
