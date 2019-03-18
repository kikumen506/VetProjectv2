export interface Mascotas{
    id?: number;
    chip?: string;
    nombre?: string;
    animal?: string;
    raza?: string;
    sexo?: string;
    fechanacimiento?: string;
    fk_clientes?: number;
}