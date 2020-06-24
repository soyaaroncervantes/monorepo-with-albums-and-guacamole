import { createAction, props } from '@ngrx/store';
import { Album } from '@albums/interfaces';

export const getAlbums = createAction(
  '[ Albums Action ] GET',
  props<Album>()
);
