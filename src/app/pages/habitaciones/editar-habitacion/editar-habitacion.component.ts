import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habitacion } from 'src/app/models/Habitacion.model';
import { IError } from 'src/app/models/IError.model';
import { HabitacionService } from 'src/app/services/habitacion.service';

@Component({
  selector: 'app-editar-habitacion',
  templateUrl: './editar-habitacion.component.html',
  styleUrls: ['./editar-habitacion.component.css'],
})
export class EditarHabitacionComponent {
  Habitacion!: Habitacion;
  form!: FormGroup;
  @Input() idHabitacionAEditar!: Habitacion;
  id = localStorage.getItem('idHabitacion');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private HabitacionService: HabitacionService
  ) {}

  readonlyMode: boolean = true;

  ngOnInit() {
    const ced = String(localStorage.getItem('idRoom'));
    this.HabitacionService.getHabitacionById(ced).subscribe({
      next: (Habitacion: Habitacion) => {
        this.Habitacion = Habitacion;
        this.setupForm();
      },
      error: (error: any) => {
        this.toastr.error(error.error?.error, 'Error');
        this.router.navigate(['habitaciones']);
      },
    });

    this.form = this.formBuilder.group({
      tipo: ['', Validators.required],
      tarifaxhora: ['', Validators.required],
    });
  }

  setupForm() {
    this.form = this.formBuilder.group({
      tipo: this.Habitacion.tipo,
      tarifaxhora: this.Habitacion.tarifaxhora,
    });
  }

  volver() {
    localStorage.removeItem('cedula');
    this.router.navigate(['habitaciones']);
  }
  toJson(value: any) {
    return JSON.stringify(value);
  }
  guardar() {
    const Habitacion: Habitacion = {
      id: this.Habitacion.id,
      tipo: this.form.get('tipo')?.value,
      tarifaxhora: this.form.get('tarifaxhora')?.value,
    };

    console.log(Habitacion);

    this.HabitacionService.putHabitacion(Habitacion).subscribe({
      next: (data: any) => {
        this.toastr.success(data.message);
        this.router.navigate(['habitaciones']);
      },
      error: (error: IError) => {
        this.toastr.error(error.error?.details, error.error?.message);
      },
    });
  }
}
