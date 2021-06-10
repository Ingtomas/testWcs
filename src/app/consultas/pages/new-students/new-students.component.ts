import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styles: [
    `
      table {
        font-size: larger;
        font-family: cursive;
        font-weight: bolder;
        color: white;
        background-color: black;
        opacity: 80%;
        border-radius: 15px;
      }
    `,
    `
      tbody,
      td,
      tfoot,
      th,
      thead,
      tr {
        cursor: pointer;
      }
    `,
  ],
})
export class NewStudentsComponent {
  estudiante: [] = [];
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    patronus: [, [Validators.required, Validators.minLength(3)]],
    edad: [, [Validators.required, Validators.min(0)]],
    foto: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.miFormulario.reset({
      nombre: '',
    });
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.estudiante = this.miFormulario.value;
    console.log(this.estudiante);
    this.miFormulario.reset();
  }
}
