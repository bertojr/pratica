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
  selectedTag: string = '';
  postsArrByTag: iPost[] = [];

  constructor(private postSvc: PostsService) {}

  ngOnInit() {
    this.tagsArr = this.postSvc.getTagsPost();
    console.log(this.tagsArr);

    const postsArrByTagString = localStorage.getItem('postsArrByTag');
    if (postsArrByTagString !== null) {
      console.log('local', JSON.parse(postsArrByTagString));
      this.postsArrByTag = JSON.parse(postsArrByTagString);
      this.selectedTag = localStorage.getItem('selectedTag');
    }
  }

  getPostByTag(tag: string) {
    this.selectedTag = tag;
    this.postsArrByTag = this.postSvc.getPostByTag(tag);
    localStorage.setItem('postsArrByTag', JSON.stringify(this.postsArrByTag));
    localStorage.setItem('selectedTag', this.selectedTag);
    console.log(this.postsArrByTag);
    console.log(this.selectedTag);
  }

  isTagSelected(tag: string): boolean {
    return this.selectedTag === tag;
  }
}
