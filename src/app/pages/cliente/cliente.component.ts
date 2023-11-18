import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente.model';
import { IError } from 'src/app/models/IError.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  clienteSeleccionado!: Cliente;
  clienteString: string = 'Esta seguro que desea eliminar este Cliente?';
  clientes: Cliente[] = [];

  constructor(
    private router: Router,
    private _clientService: ClienteService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes() {
    this._clientService.getClientes().subscribe({
      next: (clientes: Cliente[]) => {
        this.clientes = clientes;
      },
      error: (error: IError) => {
        this.toastr.error(
          error.error?.details,
          error.error?.message + ': ' + error.error?.status
        );
      },
    });
  }

  delete(id: number) {
    console.log(id);
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
    this.clienteSeleccionado = Cliente;
  }

  obtenerClienteId(Cliente: Cliente) {
    localStorage.setItem('cedula', Cliente.cedula!.toString());
    this.router.navigate(['cliente/editar']);
  }

  onClienteGuardado(data: any) {
    this.listarClientes();
  }
}
