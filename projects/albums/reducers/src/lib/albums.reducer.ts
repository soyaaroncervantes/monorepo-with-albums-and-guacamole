import { createReducer } from '@ngrx/store';
import { initialState } from './init.state';

const albumsReducer = createReducer(
  initialState
);
