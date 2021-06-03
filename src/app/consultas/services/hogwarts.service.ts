import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class HogwartsService {
  private apiUrl: string = 'http://hp-api.herokuapp.com/api';
  showSpinner: boolean = false;
  constructor(private Http: HttpClient) {}

  buscarProfesores(): Observable<character[]> {
    const url = `${this.apiUrl}/characters/staff`;
    return this.Http.get<character[]>(url);
  }

  buscarEstudiantes(): Observable<character[]> {
    const url = `${this.apiUrl}/characters/students`;
    return this.Http.get<character[]>(url);
  }

  buscarCasas(casa: string): Observable<character[]> {
    const url = `${this.apiUrl}/characters/house/${casa}`;
    return this.Http.get<character[]>(url);
  }
}
