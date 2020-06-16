import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { TitleModule } from '../../shared/title/title.module';
import { CardModule } from '../../components/card/card.module';


@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    TitleModule,
    CardModule
  ]
})
export class AlbumsModule { }
