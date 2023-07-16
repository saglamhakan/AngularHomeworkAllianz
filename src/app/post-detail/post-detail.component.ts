import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { PostServiceService } from '../service/post-service';
import { FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  postList: any[] = [];
  userId: number = 0;
  postId: number = 0;
  categoryId: number = 0;
  addPostForm!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<any> | undefined;
  currentPage: number = 0;
  itemsPerPage: number = 5;
  


  constructor(
    private postService: PostServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.userId = +params['userId'] || 0;
      this.postId = +params['postId'] || 0;
      this.categoryId = +params['categoryId']|| 0;
      this.loadPosts();
    });
  }

  loadPosts() {
    this.postService.getAllPosts(this.userId, this.postId, this.categoryId).subscribe(data => {
      let response: any = data;
      this.postList = response.getAllPostDto;
    });
  }

  deleteItem(postId: number) {
    this.postService.deletePost(postId).subscribe(data => {
      let response: any = data;
      console.log(response);
      this.loadPosts();
    });
  }

  goToPostDetails(postId: number) {
    this.router.navigate(['/post-detail', postId]);
  }
  onSubmit() {
    if (this.addPostForm.invalid) {
      return;
    }
   
  }
  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.updatePaginator();
  }

  updatePaginator() {
    if (this.paginator) {
      this.paginator.pageIndex = this.currentPage;
      this.paginator.pageSize = this.itemsPerPage;
      this.paginator.length = this.postList.length;
    }
  }
}
