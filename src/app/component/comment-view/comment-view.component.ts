import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';


@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {

  CommentData: any;

  constructor(private _commentService: CommentsService) { }

  ngOnInit() {
    this._commentService.getComments().subscribe((val: any) => {
      this.CommentData = val;
      console.log( this.CommentData );
    });
  }
}
