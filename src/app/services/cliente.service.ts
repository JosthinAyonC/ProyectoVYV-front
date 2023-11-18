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
  getClienteByCed(ced: string) {
    return this.http.get<Cliente>(`${apiUrlClientes}/cedula/${ced}`);
  }
  postCliente(Cliente: Cliente) {
    return this.http.post<Cliente>(`${apiUrlClientes}`, Cliente);
  }
  putCliente(Cliente: Cliente) {
    return this.http.put<Cliente>(`${apiUrlClientes}`, Cliente);
  }
  deleteCliente(id: number) {
    return this.http.delete<Cliente>(`${apiUrlClientes}/eliminar/${id}`);
  }
}
