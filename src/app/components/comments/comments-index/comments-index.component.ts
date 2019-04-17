import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { Comment } from '../../../models/comment'


@Component({
  selector: 'app-comments-index',
  templateUrl: './comments-index.component.html',
  styleUrls: ['./comments-index.component.css']
})
export class CommentsIndexComponent implements OnInit {

  constructor(private _commentsService: CommentsService) { }

  ngOnInit() {
    this._commentsService.getComments().subscribe((comments: Comment[])=>{
    });
  }

}
