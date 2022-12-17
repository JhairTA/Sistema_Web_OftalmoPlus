import { useEffect, useState } from "react";
import { HistoriaClinicaDTO } from "./historiaclinica.model";
import axios from "axios";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ComponenteListaHistoriaClinica() {

  const url="https://localhost:44350/Sistema_Web_OftalmoPlus/historiaclinica";
  const [historias_clinicas, setHistoriasClinicas] = useState<HistoriaClinicaDTO[]>();

  const peticionesGet = async () => {
    await axios.get(url).then((response) => {
        setHistoriasClinicas(response.data);
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
      <div
        className="jumbotron jumbotron-fluid text-white py-2"
        style={{ backgroundColor: "#497C81" }}
      >
        <div className="container">
          <h1>Lista de Historias Clinicas</h1>
        </div>
      </div>

      <br />
      <div></div>
      <div className="container">
        <a href="historias_clinicas/registrar" className="btn btn-primary mb-2">
          Registrar Historia Clinica
        </a>
        <table className="table table-hover table-bordered table-striped">
          <thead className="table-dark text-center">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Enfer-Personal</th>
              <th scope="col">Alergias</th>
              <th scope="col">Enfer-Oculares</th>
              <th scope="col">Medicamentos</th>
              <th scope="col">Operaciones</th>
              <th scope="col">Motivo</th>
              <th scope="col">ID Paciente</th>
              <th scope="col">Estado</th>
              <th scope="col">Mantenimiento</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {historias_clinicas?.map((historia_clinica)=>(
              <tr key={historia_clinica.id_historia_clinica}>
                <th scope="row">{historia_clinica.id_historia_clinica}</th>
                <td>{historia_clinica.enfermedad_personal}</td>
                <td>{historia_clinica.alergias}</td>
                <td>{historia_clinica.enfermedades_oculares}</td>
                <td>{historia_clinica.uso_medicamentos}</td>
                <td>{historia_clinica.operaciones}</td>
                <td>{historia_clinica.motivo_consulta}</td>
                <td>{historia_clinica.idpaciente}</td>
                {historia_clinica.estadoHistoriaclinica? <td>Habilitado</td> : <td>Deshabilitado</td>}
                <td>
                <Link to={`/historias_clinicas/actualizar/${historia_clinica.id_historia_clinica}`} className="btn btn-success m-2">Actualizar</Link>
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
