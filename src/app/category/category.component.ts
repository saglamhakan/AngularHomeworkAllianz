import { Component } from '@angular/core';
import { CategoryServiceService } from '../service/category-service';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categoryList: any[]=[]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<any> | undefined;
  currentPage: number = 0;
  itemsPerPage: number = 5;
  
  constructor(
    private categoryService: CategoryServiceService, private router: Router
  ){

  }
  ngOnInit(){
    this.loadCategories()
  }
  loadCategories(){
    this.categoryService.getAllCategories().subscribe(data=>{
      let response:any = data
      this.categoryList=response.getAllCategoryDto
      this.updatePaginator();
    })
  }
  deleteItem(categoryId: number) {
    this.categoryService.deleteCategory(categoryId).subscribe(data => {
      let response: any = data;
      console.log(response);
      this.loadCategories;
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
      this.paginator.length = this.categoryList.length;
    }
  }
}