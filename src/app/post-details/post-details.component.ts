import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { PostDetailsService } from './post-details.service';

interface Comments {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}
interface Post_Body {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  public details: any;
  public comments: any
  constructor(private _postDetailsService: PostDetailsService, private router: Router) { }

  ngOnInit() {
    this.getPostDetails();
    this.getComments();
  }
  getPostDetails() {
    this._postDetailsService.getPostDetails().subscribe(
      details_result => { this.details = details_result },
      err => console.error(err),
      () => console.log('Post Details Loaded')
    );
  }

  getComments() {
    this._postDetailsService.getComments().subscribe(
      comments_result => { this.comments = comments_result },
      err => console.error(err),
      () => console.log('Comments loaded')
    );
  }
}
