import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../environments/environment.development';
import { Cliente } from '../models/Cliente.model';

const apiUrlClientes = environments.apiUrl + '/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  getClientes() {
    return this.http.get<Cliente[]>(`${apiUrlClientes}`);
  }
  getCliente(id: number) {
    return this.http.get<Cliente>(`${apiUrlClientes}/${id}`);
  }
  getClienteByCedula(id: String) {
    return this.http.get<Cliente>(`${apiUrlClientes}/ci/${id}`);
  }
  postCliente(Cliente: Cliente) {
    return this.http.post<Cliente>(`${apiUrlClientes}`, Cliente);
  }
  putCliente(Cliente: Cliente, id: number) {
    return this.http.put<Cliente>(`${apiUrlClientes}/${id}`, Cliente);
  }
  deleteCliente(id: number) {
    return this.http.put<Cliente>(`${apiUrlClientes}/eliminar/${id}`, null);
  }
}
