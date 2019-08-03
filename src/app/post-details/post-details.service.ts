import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class PostDetailsService {

  constructor(private http: HttpClient) { }
  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }

  getPostDetails() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?PostId=1&id=1');
  }

  delete(id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1/comments', { params: { id: id } });
  }
}
