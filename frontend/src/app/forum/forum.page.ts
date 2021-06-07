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
  cat=""
  subCat = [];
  isSchoolShowing = false;
  clickSubCat(event: any){
    //console.log(event);
    //this.cat = event.srcElement.attributes.name.value;
    this.subCat = event.srcElement.id;
    this.isSchoolShowing = true;
  }

}
