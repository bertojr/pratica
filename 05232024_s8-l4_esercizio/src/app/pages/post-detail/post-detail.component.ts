import { Component } from '@angular/core';
import { iPost } from '../../models/post';
import { PostsService } from '../../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  currentPost!: iPost;
  constructor(private route: ActivatedRoute, private postsSvc: PostsService) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const postTrovato = this.postsSvc.getPostById(params.id);
      if (postTrovato) {
        this.currentPost = postTrovato;
      }
    });
  }
}
