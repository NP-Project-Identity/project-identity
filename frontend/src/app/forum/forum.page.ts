import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  subSchool: any;
  cat: "";
  subCat(event: any){
    let selectedCat = event.srcElement.outerText;
    let cat = event.srcElement.id;
    let tmp = document.getElementsByClassName('sub-'+ cat );
    console.log(tmp);
  }

}
