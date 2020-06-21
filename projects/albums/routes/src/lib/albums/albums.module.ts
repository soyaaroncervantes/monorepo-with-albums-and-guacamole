import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { TitleModule } from '@albums/shared';
import { CardModule } from '@shared/components';


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
