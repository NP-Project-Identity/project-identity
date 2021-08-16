import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ForumService} from '../../services/forum.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-forum-create',
  templateUrl: './forum-create.page.html',
  styleUrls: ['./forum-create.page.scss'],
})
export class ForumCreatePage implements OnInit {


  navItems = [
    {title: 'Lmgtplatform', url: '/learningmgtplatform', icon: 'layers'},
    {title: 'Forum', url: '/forum', icon: 'chatbox-ellipses-outline'}
  ];

  createForm = this.formBuilder.group({
    title: '',
    description: ''
  });

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private forumService: ForumService, private navCtrl: NavController, private userService: UserService) { }

  ngOnInit() {
  }

  submit() {
    this.forumService.createPost(this.activatedRoute.snapshot.paramMap.get('id'), this.createForm.get("title").value, this.createForm.get("description").value, this.userService.getUserName());
    this.navCtrl.back();
  }



}
