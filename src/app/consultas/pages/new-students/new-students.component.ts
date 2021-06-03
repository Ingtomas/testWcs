import { Component } from '@angular/core';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styles: [],
})
export class NewStudentsComponent {
  // los datos se van guardando en un arreglo, el cual se usa para
  // desplegar la tabla
  personas: any[] = [];

  // los input del formulario se asocian con un modelo
  persona: any = {};

  guardar() {
    // se inserta el dato en el arreglo
    this.personas.push(this.persona);

    // se crea un nuevo objeto para almacenar nuevos datos
    this.persona = {};
  }
}
