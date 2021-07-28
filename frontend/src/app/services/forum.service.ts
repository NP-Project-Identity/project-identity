import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor() { }

  private forumDB = [
    {
      cat: "CSF", content: [
        {id: "0", title: "Welcome to CSF", content: [{text: "Welcome everyone", user: "Alan Tan", date: "01/07/2021 09:01", like: 50}]},
        {
          id: "1", title: "How to hack the bank?", content: [
            {text: "Anyone know how?", user: "John", date: "01/07/2021 09:01", like: 3},
            {text: "Nope, it is not that easy to hack", user: "Rifa", date: "01/07/2021 10:01", like: 8},
            {text: "Nope", user: "Tom", date: "01/08/2021 10:01", like: 2}
          ]
        },
        {
          id: "2", title: "help!!!!!", content: [{text: "Anyone have old EH textbook i can lent?", user: "Alan", date: "01/07/2021 09:11", like: 0}]
        }]
    },
    {
      cat: "ICT", content: [
        {id: "0", title: "Welcome to ICT", content: [{text: "Welcome everyone", user: "Alan Tan", date: "01/07/2021 09:01", like: 50}]}
      ]
    }

  ]

  loadList(cat: any) {
    return (this.forumDB.find(el => el.cat === cat).content);
  }

  loadPost(cat: any, id: any) {
    return (this.forumDB.find(el => el.cat === cat).content.find(el => el.id === id).content);
  }

  postTitle(cat: any, id: any) {
    return (this.forumDB.find(el => el.cat === cat).content.find(el => el.id === id).title);
  }
  addLike(cat: any, id: any, index: number) {
    if (id == undefined)
      this.forumDB.find(el => el.cat === cat).content[index].content[0].like += 1;
    else
      this.forumDB.find(el => el.cat === cat).content.find(el => el.id === id).content[index].like += 1;
  }
}
