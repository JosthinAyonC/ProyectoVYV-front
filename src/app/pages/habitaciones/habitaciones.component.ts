import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habitacion } from 'src/app/models/Habitacion.model';
import { IError } from 'src/app/models/IError.model';
import { HabitacionService } from 'src/app/services/habitacion.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css'],
})
export class HabitacionesComponent {
  HabitacionSeleccionado!: Habitacion;
  HabitacionString: string = 'Esta seguro que desea eliminar este Habitacion?';
  Habitacions: Habitacion[] = [];

  constructor(
    private router: Router,
    private _clientService: HabitacionService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.listarHabitacions();
  }

  listarHabitacions() {
    this._clientService.getHabitaciones().subscribe({
      next: (Habitacions: Habitacion[]) => {
        this.Habitacions = Habitacions;
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
    this._clientService.deshabilitarHabitacion(id).subscribe({
      next: () => {
        this.toastr.success('Habitacion desabilitada', 'Exito');
        this.listarHabitacions();
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }

  reservar(id: number) {
    console.log(id);
    this._clientService.deshabilitarHabitacion(id).subscribe({
      next: () => {
        this.toastr.success('Habitacion reservada!', 'Exito');
        this.listarHabitacions();
      },
      error: (error) => {
        this.toastr.error(error.error.details, 'Error');
      },
    });
  }

  liberar(id: number) {
    console.log(id);
    this._clientService.habilitarHabitacion(id).subscribe({
      next: () => {
        this.toastr.success('Habitacion desocupada!', 'Exito');
        this.listarHabitacions();
      },
      error: (error) => {
        this.toastr.error(error.error.details, 'Error');
      },
    });
  }

  obtenerHabitacionId(Habitacion: Habitacion) {
    localStorage.setItem('idRoom', Habitacion.id!.toString());
    this.router.navigate(['habitacion/editar']);
  }

  onHabitacionGuardado(data: any) {
    this.listarHabitacions();
  }
}
