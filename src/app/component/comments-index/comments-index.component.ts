import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comments-index',
  templateUrl: './comments-index.component.html',
  styleUrls: ['./comments-index.component.css']
})
export class CommentsIndexComponent implements OnInit {

  private _comment: FormGroup;

  constructor(private _form: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {

  }
  createForm(){
    this._comment = this._form.group({
      comment: new FormControl
    });
  }

  onSubmit() {
    console.log(this._comment.value)
  }
}
