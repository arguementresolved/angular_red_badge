import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  profileData: any;

  private _updateForm: FormGroup;

  constructor(private _authService: AuthService, private _form: FormBuilder, private _profileService: ProfileService) {
    this.createForm();
   }

   ngOnInit() {
    this._profileService.getProfile().subscribe((val: any) => {
      this.profileData = val;
      console.log( this.profileData );
    });
  }

  createForm() {
    this._updateForm = this._form.group({
      username: new FormControl,
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit() {
    console.log(this._updateForm.value);
    this._authService.update(this._updateForm.value).subscribe(val =>{
      console.log( val );
    });
  }
}
