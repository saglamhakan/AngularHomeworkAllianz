import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostServiceService } from '../service/post-service';
import { UpdatePostRequest } from '../model/UpdatePostRequest';
import { ActivatedRoute } from '@angular/router';
import { GetPostByIdModel } from '../model/GetPostByIdModel';


@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
  updatePostForm!: FormGroup;
  postIdFromRouting!: string | null;
  getPostByIdValue!: GetPostByIdModel;
 

  constructor(private formBuilder: FormBuilder, private postService: PostServiceService, private route: ActivatedRoute ){
    this.postIdFromRouting = this.route.snapshot.paramMap.get('postId')


  }
  ngOnInit(){

    if (this.postIdFromRouting !== null) {
      this.getPostByIdValue = this.getPostById(JSON.parse(this.postIdFromRouting));

      console.log(this.getPostByIdValue)
    }

    this.updatePostForm=this.formBuilder.group({
      postId:this.postIdFromRouting,
      userId: 0,
      categoryId:0,
      title:'',
      content: '',
      viewCount:0,
      isPublished: true
      
    })
}
onSubmit():any {
  let updatePostRequest:UpdatePostRequest = new UpdatePostRequest()
  updatePostRequest.postId = this.updatePostForm.value.postId
  updatePostRequest.userId = this.updatePostForm.value.userId
  updatePostRequest.categoryId=this.updatePostForm.value.categoryId
  updatePostRequest.title=this.updatePostForm.value.title
  updatePostRequest.content=this.updatePostForm.value.content
  updatePostRequest.viewCount=this.updatePostForm.value.viewCount
  updatePostRequest.isPublished=JSON.parse(this.updatePostForm.value.isPublished)
  console.log(updatePostRequest)
  this.postService.updatePost(updatePostRequest).subscribe(data=>{
    let response:any=data
  });
}

getPostById(postId: number): GetPostByIdModel {
  let response: GetPostByIdModel = new GetPostByIdModel();
  this.postService.getById(postId).subscribe({
    next: (data: GetPostByIdModel) => {
      response = data;
      console.log(response);
    },
    error: (error: any) => {
      console.log('Err :' + error);
    }
  });

  return response;
}

}
