import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';
import { CommentModel } from '../../models/commentUpdate';

@Component({
  selector: 'app-comment-update',
  templateUrl: './comment-update.component.html',
  styleUrls: ['./comment-update.component.css']
})
export class CommentUpdateComponent implements OnInit {

  private _commentUpdate: FormGroup;

  commentData: any;

  constructor(private _form: FormBuilder, private _commentService: CommentsService) {
    this.createForm();
   }

  ngOnInit() {
    this.commentData = localStorage.getItem('comment_id');
    console.log(this.commentData);
    }

  createForm() {
    this._commentUpdate = this._form.group({
      content: new FormControl
    });
  }

  updateComment() {
    this._commentService.updateComment(this.commentData, this._commentUpdate.value).subscribe((val: any) => {
      console.log('updated');
      localStorage.removeItem('comment_id');
    });
  }
}
