import { Cliente } from "./Cliente.model";
import { Habitacion } from "./Habitacion.model";

export interface Reserva {
    id?: number,
    horasEstadia?: string,
    estado?: string,
    total?: number,
    cliente?: Cliente,
    habitacion?: Habitacion,

}