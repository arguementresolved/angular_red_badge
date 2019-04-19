import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
