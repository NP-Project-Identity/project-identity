import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private db = [{
    type: "CSF", quiz: [
      {type: "mcq", question: "What does CSF stand for?", option: ["Cybersecurity & Logical Forensics", "Cybersecurity & Digital Forensics", "Cybersecurity & Forensics", "Cyber Safety & Digital Forensics"], answer: 1},
      {type: "mcq", question: "Which application use TCP?", option: ["DNS", "TFTP", "FTP", "HLS"], answer: 2},
      {type: "mcq", question: "Which application use UDP?", option: ["DNS", "HTTP", "HTTPS", "SMTP"], answer: 0},
      {type: "img", src: "1.png", question: "What does this image show?", answer: "router"},
      {type: "img", src: "2.png", question: "What does this image show?", answer: "router"}
    ]
  },
  {
    type: "ICT", quiz: [
      {type: "mcq", question: "What ICT stand for?", option: ["Information and Calling Technology", "Information and Communications Technology", "Infamous Communications Technology", "Information and Communications teaching"], answer: 1},
      {type: "mcq", question: "What does PROGI stand for?", option: ["Programming 1", "Pro 1", "Progamme 1", "Python 1.0"], answer: 0}
    ]
  },
  {
    type: "PROGI", quiz: [
      {type: "mcq", question: "What does PROGI stand for?", option: ["Programming 1", "Pro 1", "Progamme 1", "Python 1.0"], answer: 0},
      {type: "mcq", question: "Which is not a programming language?", option: ["JavaScript", "HTML", "C++", "Python"], answer: 1}
    ]
  },
  ]

  constructor() { }
  crateQuiz(cat: string) {
    console.log(cat);
    return (this.db.find(el => el.type === cat).quiz);
  }
}
