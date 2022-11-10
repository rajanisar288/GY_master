import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogGirdComponent } from './blog-gird/blog-gird.component';
import { TestimontalComponent } from './testimontal/testimontal.component';

const routes: Routes = [
  {
    path: 'blog-gird',
    component:BlogGirdComponent
  },
  {
    path: 'blog-detail',
    component:BlogDetailComponent
  },
  {
    path: 'testimontal',
    component:TestimontalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PagesRoutingModule { }
