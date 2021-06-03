import { Component } from '@angular/core';
import { character } from '../../interfaces/character.interface';
import { HogwartsService } from '../../services/hogwarts.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class HousesComponent {
  casas: string[] = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  casaActiva: string = '';
  personajes: character[] = [];
  showSpinner: boolean = false;

  constructor(private hogwartsService: HogwartsService) {}

  getClassCss(casa: string): string {
    return casa === this.casaActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  loadSpinner() {
    this.showSpinner = true;
    setTimeout(()=> {this.showSpinner = false},2000);
  }

  activarCasa(casa: string) {
    if (casa === this.casaActiva) {
      return;
    }

    this.casaActiva = casa;
    this.personajes = [];

    this.hogwartsService
      .buscarCasas(casa)
      .subscribe((personajes) =>  (this.personajes = personajes));
  }

  //TODO funcion calcular edad
}
