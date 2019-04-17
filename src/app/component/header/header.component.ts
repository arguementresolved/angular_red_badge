import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedin = false;

  ngOnInit() {
    if (localStorage.getItem('id_token')) {
      this.isLoggedin = true; } else {
      this.isLoggedin = false; }
  }
}
