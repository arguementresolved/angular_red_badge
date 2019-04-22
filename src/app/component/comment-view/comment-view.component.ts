import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';


@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {

<<<<<<< HEAD
  CommentData: any;
=======
  commentData: any;
>>>>>>> 06d7032b377e7c527dc8f5e79af3823d137303cc

  constructor(private _commentService: CommentsService) { }



  ngOnInit() {
<<<<<<< HEAD
    this._commentService.getComments().subscribe((val: any) => {
      this.CommentData = val;
      console.log( this.CommentData );
=======
    this._commentService.getComments().subscribe((val:any) => {
      this.commentData = val;
      console.log(this.commentData)
>>>>>>> 06d7032b377e7c527dc8f5e79af3823d137303cc
    });
  }
}
