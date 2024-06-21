import { Injectable } from '@angular/core';
import { iPost } from './models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  urlJson: string = '../assets/db.json';
  postsArr: iPost[] = [];
  constructor() {}

  async getPosts() {
    const response = await fetch(this.urlJson);
    const jsonContent = await response.json();

    this.postsArr = jsonContent.posts;
    return this.postsArr;
  }

  getPostActive() {
    return this.postsArr.filter((post) => post.active);
  }
  getPostInactive() {
    return this.postsArr.filter((post) => !post.active);
  }

  getPostById(id: number) {
    return this.postsArr.find((post) => post.id == id);
  }
}
