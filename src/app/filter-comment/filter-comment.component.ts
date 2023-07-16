import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter-comment.component.html',
  styleUrls: ['./filter-comment.component.css']
})
export class FilterCommentComponent implements OnInit {
  postId: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  applyFilters() {
    let queryParams: any = {};
   
    if (this.postId) {
      queryParams.postId = this.postId;
    }
    
    this.router.navigate(['/list-comment'], { queryParams, relativeTo: this.route });
  }
  

  clearFilters() {
    this.postId = 0;
    this.applyFilters();
  }
}

