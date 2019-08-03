import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  public id: any;
  public posts: any;
  public selectedPost: number;
  constructor(private _postsService: PostService,
    private router: Router,
    private _Activatedroute: ActivatedRoute) {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
  }


  ngOnInit() {
    // this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.getPosts();
  }
  getPosts() {
    /*  this.posts = this._Activatedroute.paramMap.subscribe(params => {
       console.log(params);
       this.id = params.get('id');
       let result_posts = this._postsService.getPosts();
       this.posts = result_posts.find(p => p.userId == this.id);
     });
  */

    this._postsService.getPosts(this.id).subscribe(
      result_posts => { this.posts = result_posts },
      err => { console.error(err) },
      () => { console.log("Posts Loaded") });

  }




  onSelect(id: number): void {
    this.selectedPost = id;
    console.log(this.selectedPost);
    this.router.navigateByUrl('/details')
  }
}
