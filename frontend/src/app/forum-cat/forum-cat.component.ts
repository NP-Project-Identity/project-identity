import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-forum-cat',
  templateUrl: './forum-cat.component.html',
  styleUrls: ['./forum-cat.component.scss'],
})
export class ForumCatComponent implements OnInit {
  //@Input() cat: string;
  @Input() subCat: string;
  //@ViewChild('') myElement: ElementRef;

  constructor() { }
  cardList = []
  list= [["CSF", "ICT", "DS"],["a","b","c","d","e"]]

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    this.cardList = this.list[this.subCat];
    }
  }
