import { Component } from '@angular/core';
import { iPost } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

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
