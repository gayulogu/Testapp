import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { Router, ActivatedRoute } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  @Input() userId: number;
  constructor(private http: HttpClient) { }
  getPosts(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { params: { userId: id } });
  }
}
