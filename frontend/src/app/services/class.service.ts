import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClassService {
  private user: [string, string[]][] = [["S10198161", ["PROGI", "PROG2II", "EH", "CAPESTONE"]], ['S10199111', ['PRogI', 'PROG2II', 'EH', 'SSD']]];
  private class = [["PROGI", ["announcement", "Week 1", "Week 2"]]];

  loadClassList(id: string): string[] {
    return (this.user.find(el => el[0] === id)[1]);
  }
  LoadClass(classID: string) {
    console.log(this.class.find(el => el[0] === classID));
    return (this.class.find(el => el[0] === classID)[1]);
  }
}
