import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';


@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {

  commentData: any;

  constructor(private _commentService: CommentsService) { }



  ngOnInit() {
    this._commentService.getComments().subscribe((val:any) => {
      this.commentData = val;
      console.log(this.commentData)
    });
  }
}
