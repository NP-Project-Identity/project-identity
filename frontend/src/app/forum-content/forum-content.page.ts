import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-forum-content',
  templateUrl: './forum-content.page.html',
  styleUrls: ['./forum-content.page.scss'],
})
export class ForumContentPage implements OnInit {
  public id: string;
  public title: string;
  public postList: any;
  file = [["Welcome to CSF", ["Welcome everyone", "Alan", "01/07/2021 09:01", "50"]],["How to hack the bank", ["Anyone know how?", "John", "01/07/2021 09:01", "3"], ["nope", "Rifa", "01/07/2021 10:01", "8"], ["Nope", "Tom", "01/07/2021 10:51", "2"]], ["help!!!!!", ["Anyone have old EH textbook i can lent?", "Alan", "01/07/2021 09:11", "0"]]]

  constructor(private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.title = this.file[this.id][0];
    this.postList = this.file[this.id];
    this.postList = this.postList.slice(1);
  }

}
