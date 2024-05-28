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
  selectedTag: string | null = null;
  postsArrByTag: iPost[] = [];
  selected: boolean = false;

  constructor(private postSvc: PostsService) {}

  ngOnInit() {
    this.tagsArr = this.postSvc.getTagsPost();
    console.log(this.tagsArr);
  }

  getPostByTag(tag: string) {
    this.selectedTag = tag;
    this.postsArrByTag = this.postSvc.getPostByTag(tag);
    console.log(this.postsArrByTag);
    console.log(this.selectedTag);
  }

  isTagSelected(tag: string): boolean {
    return this.selectedTag === tag;
  }
}
