import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loggedIn: boolean;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('api-token')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
}
