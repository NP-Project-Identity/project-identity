import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClassService} from '../services/class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private classService: ClassService,
  ) {}
  class: string[];
  ngOnInit() {
    this.class = this.classService.loadClassList('S10198161');
  }
}
