import { Component, OnInit } from '@angular/core';
import { character } from '../../interfaces/character.interface';
import { HogwartsService } from '../../services/hogwarts.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styles: [],
})
export class StaffComponent implements OnInit {
  showSpinner: boolean = false;
  constructor(private hogwartsService: HogwartsService) {}
  personajes: character[] = [];
  ngOnInit() {
    this.hogwartsService.buscarProfesores().subscribe((personajes) => {
      this.personajes = personajes;

      this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false;
      }, 2000);
    });
  }
}
