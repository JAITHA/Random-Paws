import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './Components/dogs/dogs.component';
import { FavouriteComponent } from './Components/favourite/favourite.component';

const routes: Routes = [
  {
    path:'dogs',
    component:DogsComponent
  },
  {
    path:'myfavourite',
    component:FavouriteComponent
  },
  { path: '',   redirectTo: '/dogs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
