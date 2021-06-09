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
  subCatMap = new Map();

  isSchoolShowing = false;
  clickSubCat(event: any, mapId: string){
    //console.log(event);
    //this.cat = event.srcElement.attributes.name.value;
    this.subCatMap.set(mapId, event.srcElement.id);
    this.isSchoolShowing = true;
  }


}
