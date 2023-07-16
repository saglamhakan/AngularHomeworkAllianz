import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentServiceService } from '../service/comment-service';
import { UpdateCommentRequest } from '../model/UpdateCommentRequest';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent implements OnInit{
  updateCommentForm!: FormGroup
  

  constructor(private formBuilder: FormBuilder, private commentService: CommentServiceService ){
    
  }
  ngOnInit(){


    this.updateCommentForm=this.formBuilder.group({
    commentId:0,
    postId:0,
    userId: 0,
    comment:"",
    isConfirmed:""
    
  })
}
onSubmit():any {
let updateCommentRequest:UpdateCommentRequest = new UpdateCommentRequest()
updateCommentRequest.commentId=this.updateCommentForm.value.commentId
updateCommentRequest.postId = this.updateCommentForm.value.postId
updateCommentRequest.userId = this.updateCommentForm.value.userId
updateCommentRequest.comment=this.updateCommentForm.value.comment
updateCommentRequest.isConfirmed=JSON.parse(this.updateCommentForm.value.isConfirmed)
console.log(updateCommentRequest)
this.commentService.updateComment(updateCommentRequest).subscribe(data=>{
  let response:any=data
});
}

}
