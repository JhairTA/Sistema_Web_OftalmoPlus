import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ConsultaMedicaDTO } from "./consultanedica.model";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ComponenteListaConsultaMedica(){

    const url="https://localhost:44350/Sistema_Web_OftalmoPlus/consultamedica";

    const [consultas_medicas, setConsultasMedicas] = useState<ConsultaMedicaDTO[]>();

    const peticionesGet = async () => {
        await axios.get(url).then((response) => {
            setConsultasMedicas(response.data);
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
                <h1>Lista de Consultas Medicas</h1>
                </div>
            </div>
            <br />
            <div className="container">
                <a href="consultas_medicas/registrar" className="btn btn-primary mb-2">Registrar Consulta Medica</a>
                <table className="table table-hover table-bordered table-striped">
                    <thead className="table-dark text-center">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Motivo</th>
                        <th scope="col">IDHistoria Clinica</th>
                        <th scope="col">IDEmpleado</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Mantenimiento</th>
                       
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {consultas_medicas?.map((consulta_medica)=>(
                            <tr key={consulta_medica.id_ConsultaMedica}>
                              <th scope="row">{consulta_medica.id_ConsultaMedica}</th>
                              <td>{consulta_medica.motivoConsulta}</td>
                              <td>{consulta_medica.id_historia_clinica}</td>
                              <td>{consulta_medica.id_empleado}</td>
                              {consulta_medica.estadoConsultaMedica? <td>Habilitado</td> : <td>Deshabilitado</td>}
                              <td>
                                <Link to={`/consultas_medicas/actualizar/${consulta_medica.id_ConsultaMedica}`} className="btn btn-success m-2">Actualizar</Link>
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