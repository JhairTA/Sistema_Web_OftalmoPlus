/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EmpleadoDTO } from "./empleado.model";


export default function ComponenteListaEmpleado() {

  const url="https://localhost:44350/Sistema_Web_OftalmoPlus/empleado";

  const [empleados, setEmpleados] = useState<EmpleadoDTO[]>();

  const peticionesGet = async () => {
    await axios.get(url).then((response) => {
        setEmpleados(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionesGet();
  }, []);



  return (
    <div className="content">

			<div className="jumbotron jumbotron-fluid text-white py-2" style={{backgroundColor:'#497C81'}}>
        <div className="container">
          <h1>Lista de Empleados</h1>
        </div>
      </div>

      <br />
      <div className="container">
        <a href="empleados/registrar" className="btn btn-primary mb-2">Registrar Empleado</a>
        <table className="table table-hover table-bordered table-striped">
          <thead className="table-dark text-center">
            <tr>
							<th scope="col">ID</th>
              <th scope="col">DNI</th>
							<th scope="col">Nombre</th>
							<th scope="col">Apellidos</th>
              <th scope="col">Telefono</th>
              <th scope="col">Correo</th>
              <th scope="col">Genero</th>
              <th scope="col">Cargo</th>
              <th scope="col">User ID</th>
							<th scope="col">Estado</th>
              <th scope="col">Mantenimiento</th>
            </tr>
          </thead>
          <tbody className="text-center">
						{empleados?.map((empleado) => (
            <tr key={empleado.id_empleado}>
              <th scope="row">{empleado.id_empleado}</th>
              <td>{empleado.dni_empleado}</td>
              <td>{empleado.nombre_empleado}</td>
              <td>{empleado.apellido_empleado}</td>
              <td>{empleado.telefono_empleado}</td>
              <td>{empleado.correo_empleado}</td>
              <td>{empleado.genero_empleado}</td>
              <td>{empleado.cargo_empleado}</td>
              <td>{empleado.id_Usuario}</td> 
              {empleado.estadoEmpleado? <td>Habilitado</td> : <td>Deshabilitado</td>}
              
              <td>
                <Link to={`/empleados/actualizar/${empleado.id_empleado}`} className="btn btn-success m-2">Actualizar</Link>
                <a href="#" className="btn btn-danger m-2">Eliminar</a>
              </td>
                         
            </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
}
