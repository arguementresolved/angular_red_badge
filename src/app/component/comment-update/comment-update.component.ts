import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comment-update',
  templateUrl: './comment-update.component.html',
  styleUrls: ['./comment-update.component.css']
})
export class CommentUpdateComponent implements OnInit {

  private _commentUpdate: FormGroup;

  commentData: any;

  constructor(private _form: FormBuilder, private _commentService: CommentsService) { }

  ngOnInit() {
    this._commentService.getComments().subscribe((val: any) => {
      this.commentData = val;
      console.log(this.commentData);
    });
  }

  createForm() {
    this._commentUpdate = this._form.group({
      content: new FormControl
    });
  }

  updateComment() {
    console.log(this.commentData);
    console.log(this._commentUpdate.value);
    this._commentService.updateComment(this.commentData.id, this._commentUpdate.value).subscribe((val: any) => {
      console.log('updated');
    });
  }
}
