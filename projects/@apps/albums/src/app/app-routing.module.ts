import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsRoutesEnum } from '@albums/enums';

const routes: Routes = [

  {
    path: AlbumsRoutesEnum.home,
    loadChildren: () => import( '@albums/routes' ).then( m => m.HomeModule )
  },

  {
    path: AlbumsRoutesEnum.albums,
    loadChildren: () => import( '@albums/routes' ).then( m => m.AlbumsModule )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
