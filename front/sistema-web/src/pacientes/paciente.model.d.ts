export interface PacienteDTO{
    idpaciente : integer;
    dnipaciente : string;
    nombrepaciente : string;
    apellidospaciente : string;
    correopaciente : string;
    telefonopaciente : string
    generopaciente : string;
    fechanacimientopaciente : Date;
    estadocivilpaciente : string;
    edadpaciente : integer;
    estadoPaciente : boolean
}

export interface PacienteRegistrarDTO{
    dnipaciente : string;
    nombrepaciente : string;
    apellidospaciente : string;
    correopaciente : string;
    telefonopaciente : string
    generopaciente : string;
    fechanacimientopaciente : Date;
    estadocivilpaciente : string;
    edadpaciente : integer;
    estadoPaciente : boolean
}