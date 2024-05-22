import { Component } from '@angular/core';
import { iPost } from '../../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  urlJson = '../../../assets/db.json';

  postArr: iPost[] = [];
  fourPostsRandom: number[] = [];

  ngOnInit() {
    fetch(this.urlJson)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.postArr = response.posts;
        console.log(this.postArr);
        this.postsRandom();
      });
  }

  postsRandom() {
    for (let i = 0; i < 3; i++) {
      this.fourPostsRandom.push(i);
    }
    /*
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * this.postArr.length);
    }
    */
  }
}
