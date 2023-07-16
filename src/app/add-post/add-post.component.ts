import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostServiceService } from '../service/post-service';
import { AddPostRequest } from '../model/AddPostRequest';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{
  addPostForm!: FormGroup
 

  constructor(private formBuilder: FormBuilder, private postService: PostServiceService ){
  }
  ngOnInit(){
    this.addPostForm=this.formBuilder.group({
    categoryId:0,
    userId:0,
    title: "",
    content: "",
    viewCount: 0,
    isPublished:true
    })
  }
  onSubmit():any {
    let addPostRequest:AddPostRequest = new AddPostRequest()
    addPostRequest.categoryId=this.addPostForm.value.categoryId
    addPostRequest.userId=this.addPostForm.value.userId
    addPostRequest.title=(this.addPostForm.value.title)
    addPostRequest.content=this.addPostForm.value.content
    addPostRequest.viewCount=this.addPostForm.value.viewCount
    addPostRequest.isPublished=this.addPostForm.value.isPublished
    console.log(addPostRequest)
    this.postService.addPost(addPostRequest).subscribe(data=>{
      let response:any=data
    });
  }
  
}
