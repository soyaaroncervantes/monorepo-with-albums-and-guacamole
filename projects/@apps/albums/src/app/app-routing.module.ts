import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsRoutesEnum, albumsRoutes } from '@albums/enums';

const routes: Routes = [

  {
    path: albumsRoutes.parent,
    loadChildren: () => import( '@albums/routes' ).then( m => m.HomeModule )
  },

  {
    path: albumsRoutes.children.albums,
    loadChildren: () => import( '@albums/routes' ).then( m => m.AlbumsModule )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
