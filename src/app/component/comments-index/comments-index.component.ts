import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments-index',
  templateUrl: './comments-index.component.html',
  styleUrls: ['./comments-index.component.css']
})
export class CommentsIndexComponent implements OnInit {

  private _comment: FormGroup;

  commentData: any;

  constructor(private _form: FormBuilder, private _commentService: CommentsService) {
    this.createForm();
   }

  ngOnInit() {

  }
  createForm() {
    this._comment = this._form.group({
      content: new FormControl
    });
  }

<<<<<<< HEAD
  // onSubmit() {
  //   console.log(this._comment.value)
  //   this._commentService.createComment(comme)
  // }
=======
  onSubmit() {
    console.log(this._comment.value)
    this._commentService.createComment(this._comment.value).subscribe((val: any) => { 
      this.commentData = val;
      console.log(this.commentData);
    });
  }
>>>>>>> d8ec1f00389691ef57861a78fe13dcc9cc45cba5
}
