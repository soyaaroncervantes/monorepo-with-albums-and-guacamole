import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./routes/home/home.module').then( m => m.HomeModule) },
  { path: 'albums', loadChildren: () => import('./routes/albums/albums.module').then( m => m.AlbumsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
