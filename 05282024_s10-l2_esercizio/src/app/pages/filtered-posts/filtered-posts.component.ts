import { Component } from '@angular/core';
import { PostsService } from '../../posts.service';
import { iPost } from '../../models/post';

@Component({
  selector: 'app-filtered-posts',
  templateUrl: './filtered-posts.component.html',
  styleUrl: './filtered-posts.component.scss',
})
export class FilteredPostsComponent {
  tagsArr: string[] = [];
  postsArrByTag: iPost[] = [];
  constructor(private postSvc: PostsService) {}

  ngOnInit() {
    this.tagsArr = this.postSvc.getTagsPost();
    console.log(this.tagsArr);
  }

  getPostByTag(tag: string) {
    this.postsArrByTag = this.postSvc.getPostByTag(tag);
    console.log(this.postsArrByTag);
  }
}
