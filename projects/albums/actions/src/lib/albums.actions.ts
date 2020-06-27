import { createAction, props } from '@ngrx/store';
import { Album } from '@albums/interfaces';
import { Update } from '@ngrx/entity';

export const loadAlbums = createAction( '[Albums/API] Load Albums', props<{ albums: Album[] }>() );
export const addAlbum = createAction( '[Albums/API] Add Album', props<{ albums: Album }>() );
export const deleteAlbum = createAction( '[Albums/API] Add Album', props<{ id: string }>() );
export const updateAlbum = createAction('[Albums/API] Update Album', props<{ update: Update<Album> }>() );
