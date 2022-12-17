/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { PacienteDTO } from "./paciente.model";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ComponenteListaPaciente(){

    const url="https://localhost:44350/Sistema_Web_OftalmoPlus/paciente";

    const [pacientes, setPacientes] = useState<PacienteDTO[]>();

    const peticionesGet = async () => {
        await axios.get(url).then((responde)=>{
            setPacientes(responde.data);
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    useEffect(() => {
        peticionesGet();
      }, []);

    return(
        <div className="content"> 
            <div className="jumbotron jumbotron-fluid text-white py-2 " style={{backgroundColor:'#497C81'}}>
                <div className="container">
                <h1>Lista de Pacientes</h1>
                </div>
            </div>
            <br />
            <div className="container">
                <a href="pacientes/registrar" className="btn btn-primary mb-2">Registrar Paciente</a>
                <table className="table table-hover table-bordered">
                    <thead className="table-dark text-center">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">DNI</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Fecha-Nac</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Mantenimiento</th>
                       
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {pacientes?.map((paciente)=>(
                            <tr key={paciente.idpaciente}>
                                <th scope="row">{paciente.idpaciente}</th>
                                <td>{paciente.dnipaciente}</td>
                                <td>{paciente.nombrepaciente}</td>
                                <td>{paciente.apellidospaciente}</td>
                                <td>{paciente.correopaciente}</td>
                                <td>{paciente.telefonopaciente}</td>
                                <td>{paciente.generopaciente}</td>
                                <td>{paciente.fechanacimientopaciente.toString()}</td>
                                <td>{paciente.edadpaciente}</td>
                                {paciente.estadoPaciente? <td>Habilitado</td> : <td>Desabilitado</td>}
                                <td>
                                    <Link to={`/pacientes/actualizar/${paciente.idpaciente}`} className="btn btn-success m-2">Actualizar</Link>
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