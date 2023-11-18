import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habitacion } from '../models/Habitacion.model';
import { environments } from 'src/environments/environment.development';

const apiUrlHabitaciones = environments.apiUrl + '/habitaciones';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  constructor(private http: HttpClient) {}

  getHabitaciones() {
    return this.http.get<Habitacion[]>(`${apiUrlHabitaciones}`);
  }
  getHabitacionesDisponibles() {
    return this.http.get<Habitacion[]>(`${apiUrlHabitaciones}`);
  }
  getHabitacionById(ced: string) {
    return this.http.get<Habitacion>(`${apiUrlHabitaciones}/${ced}`);
  }
  postHabitacion(Habitacion: Habitacion) {
    return this.http.post<Habitacion>(`${apiUrlHabitaciones}`, Habitacion);
  }
  putHabitacion(Habitacion: Habitacion) {
    return this.http.put<Habitacion>(`${apiUrlHabitaciones}`, Habitacion);
  }
  habilitarHabitacion(id: number) {
    return this.http.post<Habitacion>(`${apiUrlHabitaciones}/habilitar/${id}`, null);
  }
  deshabilitarHabitacion(id: number) {
    return this.http.delete<Habitacion>(`${apiUrlHabitaciones}/deshabilitar/${id}`);
  }
}
