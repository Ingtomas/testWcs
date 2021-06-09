import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styles: [],
})
export class NewStudentsComponent {
  estudiante: [] = [];
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    patronus: [, [Validators.required, Validators.minLength(3)]],
    edad: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.miFormulario.reset({
      nombre: '',
    });

    if (localStorage.getItem('estudiante')) {
      this.estudiante = JSON.parse(localStorage.getItem('historial')!);
    }
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
    this.miFormulario.reset();
    localStorage.setItem('estudiante', JSON.stringify(this.estudiante));
  }
}
