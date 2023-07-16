import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../model/AddCategoryRequest';
import { UpdateCategoryRequest } from '../model/UpdateCategoryRequest';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private apiUrl = 'http://localhost:8080/categories'

  constructor(private http:HttpClient) { 
    
  }

  getAllCategories(): Observable<any>{
    return this.http.get<any> (this.apiUrl + "/getAll")
  }
  addCategory(category:AddCategoryRequest){
    return this.http.post<any>(this.apiUrl + "/add", category,{})
  }
  updateCategory(category:UpdateCategoryRequest){
    return this.http.put<any> (this.apiUrl + "/update", category, {})
  }
  deleteCategory(categoryId:number){
    const url = `${this.apiUrl}/delete/${categoryId}`;
    return this.http.delete<any> (url)
  }
}