import { Component } from '@angular/core';
import { PostsService } from '../../posts.service';
import { iPost } from '../../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  url: string = '../../../assets/db.json';
  postArr: iPost[] = [];
  ngOnInit() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.postArr = data.posts;
        console.log(this.postArr);
      });
  }
}
