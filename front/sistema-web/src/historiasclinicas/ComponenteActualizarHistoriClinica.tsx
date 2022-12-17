import axios from "axios";
import { Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { HistoriaClinicaDTO } from "./historiaclinica.model";

export default function ComponenteActualizarHistoriClinica() {

  const history = useNavigate();
  const { id }: any = useParams();
  const url = `https://localhost:44350/Sistema_Web_OftalmoPlus/historiaclinica/${id}`;

  const [historias_clinicas, setHistoriasClinicas] = useState<HistoriaClinicaDTO>();
  const peticionesGet = async () => {
    await axios
    .get(url)
    .then((response) => {
      setHistoriasClinicas(response.data);
		})
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    peticionesGet();
  }, []);

  async function ActualizarHistoriaClinica(historia_clinica: HistoriaClinicaDTO) {
    try {
      await axios.put(url, historia_clinica);
      history("historias_clinicas");
    }
		catch (error) {
    	console.log(error);
    }
  }


  return (
    <div className="content">
      <div className="jumbotron jumbotron-fluid text-white py-2" style={{backgroundColor:'#497C81'}}>
      <div className="container">
        <h1>Actualizar Historia Clinica</h1>
      </div>
      </div>
      <br />
      <Formik
        initialValues={{id_historia_clinica:0,idpaciente: "", enfermedad_personal:"", alergias: "", enfermedades_oculares:"",
        uso_medicamentos: "", operaciones:"", motivo_consulta: "", estadoHistoriaclinica:false}} onSubmit={ async (valores) => {
        await ActualizarHistoriaClinica({
          id_historia_clinica : valores.id_historia_clinica,
          idpaciente: valores.idpaciente,
          enfermedad_personal : valores.enfermedad_personal,
          alergias : valores.alergias,
          enfermedades_oculares : valores.enfermedades_oculares,
          uso_medicamentos : valores.uso_medicamentos,
          operaciones : valores.operaciones,
          motivo_consulta : valores.motivo_consulta,
          estadoHistoriaclinica: valores.estadoHistoriaclinica
          });
        }}
        validationSchema={Yup.object({
          idpaciente: Yup.string().required("Este campo es requerido"),
          enfermedad_personal: Yup.string().required("Este campo es requerido").max(30,"La longitud maxima para este campo es 30 caracteres"),
          alergias: Yup.string().required("Este campo es requerido").max(30,"La longitud maxima para este campo es 30 caracteres"),
          enfermedades_oculares: Yup.string().required("Este campo es requerido").max(30,"La longitud maxima para este campo es 30 caracteres"),
          uso_medicamentos: Yup.string().required("Este campo es requerido").max(30,"La longitud maxima para este campo es 30 caracteres"),
          operaciones: Yup.string().required("Este campo es requerido").max(30,"La longitud maxima para este campo es 30 caracteres"),
          motivo_consulta: Yup.string().required("Este campo es requerido").max(30,"La longitud maxima para este campo es 30 caracteres")
        })}>
          <Form className="form-control shadow p-3 mb-5 bg-white rounded">
            <div className="row ">
              <div className="col-md pb-4">
              <label className="form-label">Codigo:</label>
                <Field name="id_historia_clinica" type="text" value={historias_clinicas?.id_historia_clinica} className="form-control" readonly/>
              </div>
              <div className="col-md pb-4">
              	<label className="form-label">IDPaciente:</label>
              	<Field name="idpaciente" type="text" value={historias_clinicas?.idpaciente} className="form-control"/>
              </div>
            </div>

            <div className="row">
              <div className="col-md pb-4">
              	<label className="form-label">Enfermedad Personal:</label>
              	<Field name="enfermedad_personal" type="text" value={historias_clinicas?.enfermedad_personal} className="form-control"/>
              </div>
              <div className="col-md pb-4">
              	<label className="form-label">Alergias:</label>
              	<Field name="alergias" type="text" value={historias_clinicas?.alergias} className="form-control"/>
              </div>
            </div>

            <div className="row">
              <div className="col-md pb-4">
              	<label className="form-label">Enfermedades Oculares:</label>
              	<Field name="enfermedades_oculares" type="text" value={historias_clinicas?.enfermedades_oculares} className="form-control"/>
              </div>
              <div className="col-md pb-4">
              	<label className="form-label">Uso Medicamentos:</label>
              	<Field name="uso_medicamentos" type="text" value={historias_clinicas?.uso_medicamentos} className="form-control"/>
              </div>
            </div>

            <div className="row">
              <div className="col-md pb-4">
              	<label className="form-label">Operaciones:</label>
              	<Field name="operaciones" type="text" value={historias_clinicas?.operaciones} className="form-control"/>
              </div>
              <div className="col-md pb-4">
              	<label className="form-label">Motivo Consulta:</label>
              	<Field name="motivo_consulta" type="text" value={historias_clinicas?.motivo_consulta} className="form-control"/>
              </div>
            </div>

            <div className="row  flex-row p-3">
            	<div className="col-3">
              	<label className="form-label">Estado:</label>
            		<div className="col-6 form-check"> {historias_clinicas?.estadoHistoriaclinica? (
            			<div>
                  	<Field className="form-check-input" name="estadoHistoriaclinica" type="checkbox" checked="true"/>
                  	<label className="form-check-label">Habilitado</label>
                	</div>
                	) : (
                	<div>
                  	<Field className="form-check-input" name="estadoHistoriaclinica" type="checkbox"/>
                  	<label className="form-check-label">Deshabilitado</label>
                	</div>
              	)}
              	</div>
            	</div>
          	</div>

            <div className="row justify-content-center flex-row-cols-1">
              <div className="col-2">
                <button type="submit" className="btn btn-success w-100">Actualizar</button>
              </div>
              <div className="col-2">
              <Link className="btn btn-warning w-100" to="/historias_clinicas">Cancelar</Link>
              </div>
            </div>
          </Form>
      </Formik>



    </div>
  );
}
