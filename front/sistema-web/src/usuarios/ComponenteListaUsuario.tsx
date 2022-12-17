import { UsuarioDTO } from "./usuario.model";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ComponenteListaUsuario(){

    const url="https://localhost:44350/Sistema_Web_OftalmoPlus/usuario";

    const [usuarios, setUsuarios] = useState<UsuarioDTO[]>();

    const peticionesGet = async () => {
        await axios.get(url).then((response) => {
           setUsuarios(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
      };

    useEffect(() => {
        peticionesGet();
      }, []);




    return(
        <div className="content">
					<div className="jumbotron jumbotron-fluid text-white py-2" style={{backgroundColor:'#497C81'}}>
            <div className="container">
              <h1>Lista de Usuarios</h1>
            </div>
          </div>
            <br />
          <div className="container">
            <a href="usuarios/registrar" className="btn btn-primary mb-2">Registrar Usuario</a>
            <table className="table table-hover table-bordered table-striped">
              <thead className="table-dark text-center">
                <tr>
									<th scope="col">ID</th>
									<th scope="col">Usuario</th>
									<th scope="col">Contraseña</th>
									<th scope="col">Estado</th>
									<th scope="col">Mantenimiento</th>
                </tr>
              </thead>
              <tbody className="text-center">
								{usuarios?.map((usuario) => (
                  <tr key={usuario.id_Usuario}>
                    <th scope="row">{usuario.id_Usuario}</th>
                    <td>{usuario.nombreUsuario}</td>
                    <td>{usuario.contraseñaUsuario}</td>
                    {usuario.estadoUsuario? <td>Habilitado</td> : <td>Deshabilitado</td>}
                    <td>
                      <Link to={`/usuarios/actualizar/${usuario.id_Usuario}`} className="btn btn-success m-2">Actualizar</Link>
                      <a href="#" className="btn btn-danger m-2">Eliminar</a>
                    </td>            
                  </tr>
                  ))}
              </tbody>
            </table>
          </div>
      </div>
    )
}