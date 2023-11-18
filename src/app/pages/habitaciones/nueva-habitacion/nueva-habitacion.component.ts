import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Habitacion } from 'src/app/models/Habitacion.model';
import { IError } from 'src/app/models/IError.model';
import { HabitacionService } from 'src/app/services/habitacion.service';

@Component({
  selector: 'app-nueva-habitacion',
  templateUrl: './nueva-habitacion.component.html',
  styleUrls: ['./nueva-habitacion.component.css'],
})
export class NuevaHabitacionComponent {
  @Output() habitacionSave = new EventEmitter<Habitacion>();

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _HabitacionService: HabitacionService
  ) {}

  toJson(value: any) {
    return JSON.stringify(value);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      tipo: ['', Validators.required],
      tarifaxhora: ['', Validators.required],
    });
  }
  guardar() {
    if (this.form.valid) {
      const Habitacion: Habitacion = {
        tipo: this.form.value.tipo,
        tarifaxhora: this.form.value.tarifaxhora,
      };
      this._HabitacionService.postHabitacion(Habitacion).subscribe({
        next: () => {
          this.toastr.success('Habitacion guardada', 'Exito');
          this.habitacionSave.emit();
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
