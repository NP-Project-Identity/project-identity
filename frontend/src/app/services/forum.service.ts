import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor() { }
  private CSF = [["Welcome to CSF", ["Welcome everyone", "Alan", "01/07/2021 09:01", "50"]],
  ["How to hack the bank?", ["Anyone know how?", "John", "01/07/2021 09:01", "3"], ["Nope, not that easy to hack", "Rifa", "01/07/2021 10:01", "8"], ["Nope", "Tom", "01/07/2021 10:51", "2"]],
  ["help!!!!!", ["Anyone have old EH textbook i can lent?", "Alan", "01/07/2021 09:11", "0"]]]
  private ICT = [["Welcome to ICT", ["Welcome everyone", "Alan", "01/07/2021 09:01", "50"]]]

  loadList(cat: any){
    if (cat == "CSF"){
      return this.CSF;
    }
    else if (cat == "ICT"){
      return this.ICT;
    }
  }

  loadPost(cat: any, id: any){
    if (cat == "CSF"){
      return this.CSF[id];
    }
    else if (cat == "ICT"){
      return this.ICT[id];
    }
  }
}
