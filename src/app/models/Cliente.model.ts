import { Reserva } from './Reserva.model';

export interface Cliente {
    id?: number,
    nombre?: string,
    apellido?: string,
    cedula?: string,
    email?: string,
    estado?: boolean,
    reservas?: Reserva[]
}