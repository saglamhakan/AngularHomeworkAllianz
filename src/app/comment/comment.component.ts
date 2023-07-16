import { Component } from '@angular/core';
import { CommentServiceService } from '../service/comment-service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  postId: number = 0;
  commentList: any[] = [];
  filteredCommentList: any[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<any> | undefined;
  currentPage: number = 0;
  itemsPerPage: number = 5;

  constructor(
    private commentService: CommentServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.postId = +params['postId'] || 0;
      this.applyFilters();
    });
    this.loadComments();
  }

  loadComments() {
    this.commentService.getAllComments().subscribe(data => {
      let response: any = data;
      this.commentList = response.getAllCommentDto;
      this.applyFilters();
      this.updatePaginator();
    });
  }

  deleteItem(commentId: number) {
    this.commentService.deleteComment(commentId).subscribe(data => {
      let response: any = data;
      console.log(response);
      this.loadComments();
    });
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
      this.paginator.length = this.filteredCommentList.length;
    }
  }

  applyFilters() {
    if (this.postId) {
      this.filteredCommentList = this.commentList.filter(comment => comment.postId === this.postId);
    } else {
      this.filteredCommentList = this.commentList;
    }
    this.currentPage = 0;
  }

  clearFilters() {
    this.postId = 0;
    this.applyFilters();
  }
}
