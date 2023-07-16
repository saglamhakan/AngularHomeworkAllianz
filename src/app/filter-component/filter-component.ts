import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter-component.html',
  styleUrls: ['./filter-component.css']
})
export class FilterComponent implements OnInit {
  userId: number = 0;
  postId: number = 0;
  categoryId: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  applyFilters() {
    let queryParams: any = {};
    if (this.userId) {
      queryParams.userId = this.userId;
    }
    if (this.postId) {
      queryParams.postId = this.postId;
    }
    if (this.categoryId) {
      queryParams.categoryId = this.categoryId;
    }
    this.router.navigate(['/list-post'], { queryParams, relativeTo: this.route });
  }
  

  clearFilters() {
    this.userId = 0;
    this.postId = 0;
    this.categoryId = 0;
    this.applyFilters();
  }
}
