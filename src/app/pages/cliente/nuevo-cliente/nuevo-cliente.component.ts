import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente.model';
import { IError } from 'src/app/models/IError.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css'],
})
export class NuevoClienteComponent {
  @Output() clienteSave = new EventEmitter<Cliente>();

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _clienteService: ClienteService
  ) {}

  toJson(value: any) {
    return JSON.stringify(value);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  guardar() {
    if (this.form.valid) {
      const cliente: Cliente = {
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        cedula: this.form.value.cedula,
        email: this.form.value.email,
      };
      this._clienteService.postCliente(cliente).subscribe({
        next: () => {
          this.toastr.success('cliente guardado', 'Exito');
          this.clienteSave.emit();
        },
        error: (data: IError) => {
          this.toastr.error(data.error?.details, 'Error: ');
        },
        complete: () => {
          this.form.reset();
        },
      });
    } else {
      this.toastr.error(
        'Debe completar todos los campos',
        'Oops campos nulos!'
      );
    }
  }
}
