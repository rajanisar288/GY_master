import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren: () =>
      import('./public/home/home.module').then((m) => m.HomeModule),
  },
  {
    path:'about',
    loadChildren: () =>
      import('./public/about/about.module').then((m) => m.AboutModule),
  },
  {
    path:'classes',
    loadChildren: () =>
      import('./public/classes/classes.module').then((m) => m.ClassesModule),
  },
  {
    path:'trainer',
    loadChildren: () =>
      import('./public/trainers/trainer.module').then((m) => m.TrainerModule),
  },
  {
    path:'pages',
    loadChildren: () =>
      import('./public/pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path:'contact',
    loadChildren: () =>
      import('./public/contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
