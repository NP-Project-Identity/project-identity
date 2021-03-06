import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private user: any[] = [
    {id: 'S10198161', lesson: ['PROGI', 'PROG2II', 'EH', 'CAPESTONE']},
    {id: 'S10199111', lesson: ['PRogI', 'PROG2II', 'EH', 'SSD']},
  ];
  private class: any[] = [
    [
      'PROGI',
      [
        {
          title: 'Announcement',
          type: 'folder',
          content: [
            {
              title: 'Welcome to PROG 1',
              desc: 'Welcome back to the School of ICT and hope that you had a good break.',
              type: 'text',
            },
          ],
        },
        {
          title: 'Week 1',
          type: 'folder',
          content: [
            {
              title: 'Week 1 ',
              desc: 'Welcome back to the School of ICT and hope that you had a good break.',
              type: 'text',
            },
            {
              title: 'resource',
              desc: 'File need to week 1 lesson',
              type: 'folder',
            },
          ],
        },
        {title: 'Week 2', type: 'folder'},
      ],
    ],
  ];
  private classContent = [[]];

  loadClassList(id: string): string[] {
    return this.user.find(el => el.id === id).lesson;
  }
  LoadClass(classID: string) {
    return this.class.find(el => el[0] === classID)[1];
  }
  LoadClassContent(classID: string, conentID: string) {
    const tmp: any[] = this.class.find(el => el[0] === conentID)[1];
    return tmp.find(el => el.title === classID).content;
  }
}
