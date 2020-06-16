import { Component, OnInit } from '@angular/core';
import { AlbumsRoutesEnum } from '@albums/enums';

@Component({
  selector: 'lib-albums-components-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  albumsRoutes = AlbumsRoutesEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
