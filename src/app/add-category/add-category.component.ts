import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryServiceService } from '../service/category-service';
import { AddCategoryRequest } from '../model/AddCategoryRequest';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  addCategoryForm!: FormGroup
  
  

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryServiceService ){
    
  }
  ngOnInit(){
    this.addCategoryForm=this.formBuilder.group({
      categoryName: ''
     
    })
  }
  onSubmit():any{
    let addCategoryRequest:AddCategoryRequest = new AddCategoryRequest()
    addCategoryRequest.categoryName = this.addCategoryForm.value.categoryName
    this.categoryService.addCategory(addCategoryRequest).subscribe(data=>{
      let response:any=data
  })
}

}