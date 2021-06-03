import { Component, Input, OnInit } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  @Input() personajes: character[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
function loadSpinner() {
  throw new Error('Function not implemented.');
}
