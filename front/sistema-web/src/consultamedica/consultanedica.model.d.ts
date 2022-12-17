export interface ConsultaMedicaDTO {
    id_ConsultaMedica : integer;
    motivoConsulta : string;
    id_historia_clinica : integer;
    id_empleado : integer;
    estadoConsultaMedica : boolean;
  
  }
  
  export interface ConsultaMedicaRegistrarDTO {
    motivoConsulta : string;
    id_historia_clinica : integer;
    id_empleado : integer;
    estadoConsultaMedica : boolean;
  }