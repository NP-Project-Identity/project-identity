import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClassService {
  private user: [string, string[]][] = [["S10198161", ["PROGI", "PROG2II", "EH", "CAPESTONE"]], ['S10199111', ['PRogI', 'PROG2II', 'EH', 'SSD']]]

  loadClass(id: string): string[] {
    return (this.user.find(el => el[0] === id)[1]);
  }
}
