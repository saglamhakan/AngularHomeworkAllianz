import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AddUserRequest } from '../model/AddUserRequest';
import { UpdateUserRequest } from '../model/UpdateUserRequest';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'http://localhost:8080/users'

  constructor(private http:HttpClient) { 
    
  }

  getAllUsers(): Observable<any>{
    return this.http.get<any> (this.apiUrl + "/getAll")
  }
  addUser(user:AddUserRequest){
    return this.http.post<any> (this.apiUrl + "/add", user,{})
  } 
  updateUser(user:UpdateUserRequest){
    return this.http.put<any>(this.apiUrl + "/update",user, {})
  } 
  deleteUser(userId:number){
    const url = `${this.apiUrl}/delete/${userId}`;
    return this.http.delete<any> (url)
  }
}

