import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forum-cat',
  templateUrl: './forum-cat.component.html',
  styleUrls: ['./forum-cat.component.scss'],
})
export class ForumCatComponent implements OnInit {
  @Input() page: string;
  @Input() cat: string;
  @Input() subCat: string;
  @Input() list: string[];

  constructor(private router: Router) {}
  cardList: string[] = [];
  schoolList = [
    ['CSF', 'ICT', 'DS'],
    ['a', 'b', 'c', 'd', 'e'],
    ['1', '2'],
  ];
  ccaList = [['Overflow', 'Overwork', 'Overkill']];

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (this.page == 'forum') {
      if (this.cat == 'school') this.cardList = this.schoolList[this.subCat];
      else if (this.cat == 'cca') this.cardList = this.ccaList[this.subCat];
    } else {
      this.cardList = this.list;
    }
  }

  redirect(pages: string, subPageNo: string) {
    if (this.page == 'forum')
      this.router.navigate(['./' + this.page + '/' + pages + '/' + subPageNo]);
    else this.router.navigate(['./' + this.page + '/' + subPageNo]);
  }
}
