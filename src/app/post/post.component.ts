import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';
import { Router } from '@angular/router';

interface Posts {
  title: string,
  id: number,
  userId: number
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() userId: number;
  public posts: any;
  public selectedPost: number;
  constructor(private _postsService: PostService, private router: Router) {
  }


  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this._postsService.getPosts().subscribe(
      result_posts => { this.posts = result_posts },
      err => { console.error(err) },
      () => { console.log("Posts Loaded") }
    );
  }

  onSelect(id: number): void {
    this.selectedPost = id;
    console.log(this.selectedPost);
    this.router.navigateByUrl('/details')
  }
}
