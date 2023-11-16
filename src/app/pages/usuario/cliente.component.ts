import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  //Cliente que va a ser obtenido para extraer el id cuando presione el boton eliminar/editar
  ClienteSeleccionado!: Cliente;
  ClienteIdSeleccionado!: number;
  ClienteString: string = 'Esta seguro que desea eliminar este Cliente?';
  isAdmin: boolean = false;
  page: number = 0;
  totalPages?: Array<number>;
  Clientes: Cliente[] = [];

  constructor(
    private router: Router,
    private _clientService: ClienteService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.listarClientes();
  }

  lastPage() {
    this.page--;
    this.listarClientes();
  }

  nextPage() {
    this.page++;
    this.listarClientes();
  }
  
  setpage(page: number): void {
    this.page = page;
    this.listarClientes();
  }

  listarClientes() {
    this._clientService.getClientes().subscribe({
      next: (Clientes) => {
        this.Clientes = Clientes;
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }

  delete(id: number) {
    this._clientService.deleteCliente(id).subscribe({
      next: () => {
        this.toastr.success('Cliente eliminado', 'Exito');
        this.listarClientes();
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }

  obtenerCliente(Cliente: Cliente) {
    this.ClienteSeleccionado = Cliente;
  }

  obtenerClienteId(Cliente: Cliente) {
    localStorage.setItem('idCliente', Cliente.id!.toString());
    this.router.navigate(['Cliente/editar']);
  }

  onClienteGuardado(Cliente: Cliente) {
    this.listarClientes();
  }

}
