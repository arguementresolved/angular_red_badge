import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private _form: FormBuilder, private _authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.registerForm = this._form.group({
      username: new FormControl,
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);

    this._authService
      .register(this.registerForm.value).subscribe(val => console.log(val));
  }
}
