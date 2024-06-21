import { Component } from '@angular/core';

import { iPost } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  postsArr: iPost[] = [];
  fourPostsRandom: iPost[] = [];
  constructor(private postsSvc: PostsService) {}

  ngOnInit() {
    this.postsArr = this.postsSvc.postsArr;
    console.log(this.postsArr);
    this.generatePostsRandom();
  }

  generatePostsRandom() {
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * this.postsArr.length);
      this.fourPostsRandom.push(this.postsArr[randomIndex]);
    }
    console.log(this.fourPostsRandom);
  }
}
