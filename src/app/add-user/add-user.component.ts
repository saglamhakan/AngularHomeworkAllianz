import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from '../service/user-service';
import { AddUserRequest } from '../model/AddUserRequest';




@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  addUserForm!: FormGroup
 

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService ){
    
  }
  ngOnInit(){
    this.addUserForm=this.formBuilder.group({
      userName: '',
      email: '',
      isActive: ''
    })
  }
  onSubmit():any {
    let addUserRequest:AddUserRequest = new AddUserRequest()
    addUserRequest.userName = this.addUserForm.value.userName
    addUserRequest.email=this.addUserForm.value.email
    addUserRequest.isActive=JSON.parse(this.addUserForm.value.isActive)
    console.log(addUserRequest)
    this.userService.addUser(addUserRequest).subscribe(data=>{
      let response:any=data
    });
  }
  
}
