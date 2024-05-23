import { Injectable } from '@angular/core';
import { iPost } from './models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  url: string = '../assets/db.json';
  postArr: iPost[] = [];
  getJsonPosts() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {});
  }

  getAll() {
    return this.postArr;
  }
}
