import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../service/user-service';
import { FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: any[] = [];
  addUserForm!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<any> | undefined;
  currentPage: number = 0;
  itemsPerPage: number = 5;

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(data => {
      let response: any = data;
      this.userList = response.getAllUsersDto;
      this.dataSource = new MatTableDataSource<any>(this.userList);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteItem(userId: number) {
    this.userService.deleteUser(userId).subscribe(data => {
      let response: any = data;
      console.log(response);
      this.loadUsers();
    });
    
  }

  onSubmit() {
    if (this.addUserForm.invalid) {
      return;
    }
    const formData = this.addUserForm.value;
    this.userService.addUser(formData).subscribe(data => {
      console.log('User added successfully.');
      this.loadUsers();
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
      this.paginator.length = this.userList.length;
    }
  }
}
