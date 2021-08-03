import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor() { }

  private forumDB = [
    {
      cat: "CSF", content: [
        {id: "0", title: "Welcome to CSF", content: [{text: "Welcome everyone", user: "Alan Tan", date: "1/7/2021 09:01", like: 50}]},
        {
          id: "1", title: "How to hack the bank?", content: [
            {text: "Anyone know how?", user: "Rifa Achrinza", date: "1/7/2021 09:01", like: 3},
            {text: "Nope, it is not that easy to hack", user: "Alan Tan", date: "1/7/2021 10:01", like: 8},
            {text: "Nope", user: "Alan Tan", date: "1/8/2021 10:01", like: 2}
          ]
        },
        {
          id: "2", title: "help!!!!!", content: [{text: "Anyone have old EH textbook i can lent?", user: "Rifa Achrinza", date: "1/7/2021 09:11", like: 0}]
        }]
    },
    {
      cat: "ICT", content: [
        {id: "0", title: "Welcome to ICT", content: [{text: "Welcome everyone", user: "Alan Tan", date: "1/7/2021 09:01", like: 50}]}
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
  getDate() {
    let date = new Date();
    return date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
  }
  createPost(cat: string, title: string, desc: string, user: string) {
    let id = this.forumDB.find(el => el.cat === cat).content.length.toString();
    let currentDate = this.getDate()
    let tmp = {id: id, title: title, content: [{text: desc, user: user, date: currentDate, like: 0}]}
    this.forumDB.find(el => el.cat === cat).content.push(tmp);
  }
  createComment(cat: string, id: string, desc: string, user: string) {
    let date = new Date();
    let currentDate = this.getDate();
    let tmp = {text: desc, user: user, date: currentDate, like: 0}
    this.forumDB.find(el => el.cat === cat).content.find(el => el.id === id).content.push(tmp);
  }
}
