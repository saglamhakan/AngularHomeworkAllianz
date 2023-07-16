// post-service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UpdatePostRequest } from '../model/UpdatePostRequest';
import { AddPostRequest } from '../model/AddPostRequest';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private apiUrl = 'http://localhost:8080/posts';
  private filteredPostsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public filteredPosts$: Observable<any[]> = this.filteredPostsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllPosts(userId: number, postId: number, categoryId: number): Observable<any> {
    let params = new HttpParams();
    if (userId) {
      params = params.set('userId', userId.toString());
    }
    if (postId) {
      params = params.set('postId', postId.toString());
    }
    if (categoryId) {
      params = params.set('categoryId', categoryId.toString());
    }
    return this.http.get<any>(`${this.apiUrl}/getAll`, { params });
  }

  getById(postId: number): Observable<any> {
    const url = `${this.apiUrl}/getById/${postId}`;
    return this.http.get<any>(url);
  }

  addPost(post: AddPostRequest) {
    return this.http.post<any>(`${this.apiUrl}/add`, post, {});
  }

  updatePost(post: UpdatePostRequest) {
    return this.http.put<any>(`${this.apiUrl}/update`, post, {});
  }

  deletePost(postId: number) {
    const url = `${this.apiUrl}/delete/${postId}`;
    return this.http.delete<any>(url);
  }
}
