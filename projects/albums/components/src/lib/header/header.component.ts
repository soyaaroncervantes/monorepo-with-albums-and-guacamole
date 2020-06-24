import { Component, OnInit } from '@angular/core';
import { AlbumsRoutesEnum, albumsRoutes } from '@albums/enums';

@Component({
  selector: 'lib-albums-components-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  albumsRoutes = AlbumsRoutesEnum;
  albumsRoutesObject = albumsRoutes;

  constructor() { }

  ngOnInit(): void { }

}
