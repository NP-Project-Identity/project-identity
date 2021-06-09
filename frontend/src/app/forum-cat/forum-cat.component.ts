import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-forum-cat',
  templateUrl: './forum-cat.component.html',
  styleUrls: ['./forum-cat.component.scss'],
})
export class ForumCatComponent implements OnInit {
  @Input() cat: string;
  @Input() subCat: string;
  //@ViewChild('') myElement: ElementRef;

  constructor() {}
  cardList = [];
  schoolList = [
    ['CSF', 'ICT', 'DS'],
    ['a', 'b', 'c', 'd', 'e'],
    ['1', '2'],
  ];
  ccaList = [['Overflow', 'bababa']];

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.cat);
    if (this.cat == 'school') this.cardList = this.schoolList[this.subCat];
    else if (this.cat == 'cca') this.cardList = this.ccaList[this.subCat];
  }
}
