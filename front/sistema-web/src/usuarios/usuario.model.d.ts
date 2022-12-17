export interface UsuarioDTO {
  id_Usuario : integer;
  nombreUsuario : string;
  contraseñaUsuario : string;
  estadoUsuario : boolean;

}

export interface UsuarioRegistrarDTO {
  nombreUsuario: string;
  contraseñaUsuario: string;
  estadoUsuario: boolean;
}

