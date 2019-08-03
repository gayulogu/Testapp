import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


interface Users {
  id: string;
  name: string;
  company: Company;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users: any;
  public selecteduserId: number;
  constructor(private _homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this._homeService.getUsers().subscribe(
      users_result => { this.users = users_result },
      err => console.error(err),
      () => console.log('Users Loaded')
    );
  }
  onSelect(id: number): void {
    this.selecteduserId = id;
    console.log(this.selecteduserId);
    // this.router.navigateByUrl('/posts')
  }

}
