import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modules-albums-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
