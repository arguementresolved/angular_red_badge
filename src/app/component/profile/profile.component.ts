import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: Array<any> = [];

  constructor(private _profileService: ProfileService) {
   }

  ngOnInit() {
    this._profileService.getProfile().subscribe((val: Array<any>) => {
      this.profileData = val;
      console.log( this.profileData.values );
    });
  }

  onSubmit() {}
}
