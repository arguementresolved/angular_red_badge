import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments-index',
  templateUrl: './comments-index.component.html',
  styleUrls: ['./comments-index.component.css']
})
export class CommentsIndexComponent implements OnInit {

  comment: FormGroup;

  commentData: any;

  constructor(private _form: FormBuilder, private _commentService: CommentsService) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm() {
    this.comment = this._form.group({
      content: new FormControl
    });
  }

  onSubmit() {
    console.log(this.comment.value);
    this._commentService.createComment(this.comment.value).subscribe((val: any) => {
      this.commentData = val;
      console.log(this.commentData.content);
    });
  }
}
