import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private db = [[["What CSF stand for?", "Cybersecurity & Logical Forensics", "Cybersecurity & Digital Forensics", "Cybersecurity & Forensics", "Cyber Safety & Digital Forensics", "2"], ["What module is not teach for CSF?", "FP2", "Prog1", "SSD", "HDD", "4"]], [["What ICT stand for?", "Information and Calling Technology", "Information and Communications Technology", "Infamous Communications Technology", "Information and Communications teaching", "2"]], [["What PROGI stand for?", "Programming 1", "Pro 1", "Progamme 1", "Python", "1"]]]

  constructor() { }
  crateQuiz(cat: string) {
    if (cat == "CSF") {
      return this.db[0];
    }
    else if (cat == "ICT") {
      return this.db[1];
    }
    else if (cat == "PROGI") {
      return this.db[2];
    }
    else
      return 0;
  }
}
