import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ManagerComponent } from './manager/manager.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'manager/:id',
    component: ManagerComponent
  },
  {
    path: 'developer/:id',
    component: DeveloperComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
