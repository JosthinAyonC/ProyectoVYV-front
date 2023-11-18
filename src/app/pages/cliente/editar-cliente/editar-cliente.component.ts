import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente.model';
import { IError } from 'src/app/models/IError.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
  cliente!: Cliente;
  form!: FormGroup;
  @Input() idclienteAEditar!: Cliente;
  id = localStorage.getItem('idcliente');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private clienteService: ClienteService
  ) { }


  readonlyMode: boolean = true;

  ngOnInit() {
    const ced = String (localStorage.getItem('cedula'));
    this.clienteService.getClienteByCed(ced).subscribe({
      next: (cliente: Cliente) => {
        this.cliente = cliente;
        this.setupForm();
      },
      error: (error: any) => {
        this.toastr.error(error.error?.error, 'Error');
        this.router.navigate(['clientes']);
      },
    });

    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  setupForm() {
    this.form = this.formBuilder.group({
      nombre: this.cliente.nombre,
      apellido: this.cliente.apellido,
      cedula: this.cliente.cedula,
      email: this.cliente.email,
    });
  }

  volver() {
    localStorage.removeItem('cedula');
    this.router.navigate(['clientes']);
  }
  toJson(value: any) {
    return JSON.stringify(value);
  }
  guardar() {
    const cliente: Cliente = {
      id: this.cliente.id,
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      cedula: this.form.get('cedula')?.value,
      email: this.form.get('email')?.value,
    };

    console.log(cliente);

    this.clienteService.putCliente(cliente).subscribe({
      next: (data: any) => {
        this.toastr.success(data.message);
        this.router.navigate(['clientes']);
      },
      error: (error: IError) => {
        this.toastr.error(error.error?.details,error.error?.message);
      },
    });
  }
}
