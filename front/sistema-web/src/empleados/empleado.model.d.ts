
export interface EmpleadoDTO {
  id_empleado :  integer;
  dni_empleado : string;
  nombre_empleado : string;
  apellido_empleado : string;
  telefono_empleado : string;
  correo_empleado : string;
  genero_empleado : string;
  cargo_empleado : string;
  estadoEmpleado : boolean;
  id_Usuario : integer;
}


export interface EmpleadoRegistrarDTO {
  dni_empleado : string;
  nombre_empleado : string;
  apellido_empleado : string;
  telefono_empleado : string;
  correo_empleado : string;
  genero_empleado : string;
  cargo_empleado : string;
  estadoEmpleado : boolean;
  id_Usuario : integer;
}