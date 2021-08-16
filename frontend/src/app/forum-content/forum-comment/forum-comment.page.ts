import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ForumService} from '../../services/forum.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-forum-comment',
  templateUrl: './forum-comment.page.html',
  styleUrls: ['./forum-comment.page.scss'],
})
export class ForumCommentPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private forumService: ForumService, private navCtrl: NavController, private userService: UserService) { }

  navItems = [
    {title: 'Lmgtplatform', url: '/learningmgtplatform', icon: 'layers'},
    {title: 'Forum', url: '/forum', icon: 'chatbox-ellipses-outline'}
  ];

  createForm = this.formBuilder.group({
    comment: ''
  });
  ngOnInit() {
  }
  submit() {
    this.forumService.createComment(this.activatedRoute.snapshot.parent.parent.parent.parent.paramMap.get('id'), this.activatedRoute.snapshot.paramMap.get('id'), this.createForm.get("comment").value, this.userService.getUserName());
    this.navCtrl.back();
  }
}
