import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryServiceService } from '../service/category-service';
import { UpdateCategoryRequest } from '../model/UpdateCategoryRequest';


@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit{
  updateCategoryForm!: FormGroup
  

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryServiceService ){
    
  }
  ngOnInit(){
    this.updateCategoryForm=this.formBuilder.group({
    categoryId:0,
    categoryName:""
    
  })
}
onSubmit():any {
let updateCategoryRequest:UpdateCategoryRequest = new UpdateCategoryRequest()
updateCategoryRequest.categoryId = this.updateCategoryForm.value.categoryId
updateCategoryRequest.categoryName = this.updateCategoryForm.value.categoryName

console.log(updateCategoryRequest)
this.categoryService.updateCategory(updateCategoryRequest).subscribe(data=>{
  let response:any=data
});
}

}

