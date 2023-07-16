import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from '../service/user-service';
import { UpdateUserRequest } from '../model/UpdateUserRequest';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  updateUserForm!: FormGroup
  

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService ){
    
  }
  ngOnInit(){
    this.updateUserForm=this.formBuilder.group({
      userId: 0,
      userName: '',
      email: '',
      isActive: ''
    })
}
onSubmit():any {
  let updateUserRequest:UpdateUserRequest = new UpdateUserRequest()
  updateUserRequest.userId = this.updateUserForm.value.userId
  updateUserRequest.userName = this.updateUserForm.value.userName
  updateUserRequest.email=this.updateUserForm.value.email
  updateUserRequest.isActive=JSON.parse(this.updateUserForm.value.isActive)
  console.log(updateUserRequest)
  this.userService.updateUser(updateUserRequest).subscribe(data=>{
    let response:any=data
  });
}

}