export interface HistoriaClinicaDTO {
    id_historia_clinica : integer;
    idpaciente : integer;
    enfermedad_personal: string;
    alergias : string;
    enfermedades_oculares: string;
    uso_medicamentos : string;
    operaciones : string;
    motivo_consulta : string;
    estadoHistoriaclinica : boolean;
  
  }
  
  export interface HistoriaClinicaRegistrarDTO {
    idpaciente : integer;
    enfermedad_personal: string;
    alergias : string;
    enfermedades_oculares: string;
    uso_medicamentos : string;
    operaciones : string;
    motivo_consulta : string;
    estadoHistoriaclinica : boolean;
  }