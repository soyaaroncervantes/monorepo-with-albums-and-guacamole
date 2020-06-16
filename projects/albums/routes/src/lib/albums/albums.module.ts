import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { CardModule, TitleModule } from '@albums/shared';


@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    AlbumsRoutingModule,
    CommonModule,
    CardModule,
    TitleModule
  ],
  exports: [AlbumsComponent]
})
export class AlbumsModule { }
