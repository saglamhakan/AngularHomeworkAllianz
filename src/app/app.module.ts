import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateUserComponent } from './update-user.component/update-user.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { FilterComponent } from './filter-component/filter-component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterCommentComponent } from './filter-comment/filter-comment.component';



const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-post', component: AddUserComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'add-comment', component: AddCommentComponent },
  { path: 'list-user', component: UserComponent },
  { path: 'list-post', component: PostComponent },
  { path: 'list-category', component: CategoryComponent },
  { path: 'list-comment', component: CommentComponent },
  { path: 'update-post/:postId', component: UpdatePostComponent },
  { path: 'update-user/:userId', component:UpdateUserComponent},
  { path: 'update-category/:categoryId', component:UpdateCategoryComponent},
  { path: 'update-comment/:commentId', component: UpdateCommentComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CategoryComponent,
    PostComponent,
    AddUserComponent,
    AddPostComponent,
    AddCategoryComponent,
    CommentComponent,
    AddCommentComponent,
    HomePageComponent,
    UpdateUserComponent,
    UpdateCategoryComponent,
    UpdatePostComponent,
    UpdateCommentComponent,
    PostDetailComponent,
    FilterComponent,
    FilterCommentComponent
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
