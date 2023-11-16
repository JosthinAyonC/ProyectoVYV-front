import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent {
  
  @Input() entidadAEliminar!: any;
  @Input() tipoEntidad!: String;
  @Output() eliminarEntidad = new EventEmitter<number>();

  eliminarEntidadConfirmado() {
    this.eliminarEntidad.emit(this.entidadAEliminar.id);
  }
}
