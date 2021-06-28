import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forum-cat',
  templateUrl: './forum-cat.component.html',
  styleUrls: ['./forum-cat.component.scss'],
})
export class ForumCatComponent implements OnInit {
  @Input() cat: string;
  @Input() subCat: string;

  constructor(private router: Router) {}
  cardList = [];
  schoolList = [
    ['CSF', 'ICT', 'DS'],
    ['a', 'b', 'c', 'd', 'e'],
    ['1', '2'],
  ];
  ccaList = [['Overflow', 'Overwork', 'Overkill']];

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (this.cat == 'school') this.cardList = this.schoolList[this.subCat];
    else if (this.cat == 'cca') this.cardList = this.ccaList[this.subCat];
  }

  redirect(page: string, subPageNo: string) {
    this.router.navigate(['./forum/' + page + '/' + subPageNo]);
  }
}
