import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { UpdateUserComponent } from './update-user.component/update-user.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CategoryComponent } from './category/category.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'add-comment', component: AddCommentComponent },
  { path: 'list-user', component: UserComponent },
  { path: 'list-post', component: PostComponent },
  { path: 'list-category', component: CategoryComponent },
  { path: 'list-comment', component: CommentComponent },
  { path: 'update-post/:postId', component: UpdatePostComponent },
  { path: 'update-user/:userId', component: UpdateUserComponent },
  { path: 'update-category/:categoryId', component:UpdateCategoryComponent},
  { path: 'update-comment/:commentId', component: UpdateCommentComponent },
  { path: 'post-detail/:postId', component: PostDetailComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

