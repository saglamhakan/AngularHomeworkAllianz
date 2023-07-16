import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentServiceService } from '../service/comment-service';
import { AddCommentRequest } from '../model/AddCommentRequest';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  addCommentForm!: FormGroup
  

  constructor(private formBuilder: FormBuilder, private commentService: CommentServiceService ){
  }
  ngOnInit(){
    this.addCommentForm=this.formBuilder.group({
      postId: 0,
      userId: 0,
      comment: "",
      isConfirmed: true
    })
  }
  onSubmit():any {
    let addCommentRequest:AddCommentRequest = new AddCommentRequest()
    addCommentRequest.postId=this.addCommentForm.value.postId;
    addCommentRequest.userId=this.addCommentForm.value.userId;
    addCommentRequest.comment=this.addCommentForm.value.comment;
    addCommentRequest.isConfirmed=this.addCommentForm.value.isConfirmed;
    console.log(addCommentRequest)
    this.commentService.addComment(addCommentRequest).subscribe(data=>{
      let response:any=data
    });
  }
  
}
