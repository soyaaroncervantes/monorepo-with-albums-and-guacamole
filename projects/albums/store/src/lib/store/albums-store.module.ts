import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}, {})
  ],
  exports: [
    StoreModule
  ]
})
export class AlbumsStoreModule { }
