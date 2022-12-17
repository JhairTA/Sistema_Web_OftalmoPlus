/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { ConsultaMedicaDTO } from "./consultanedica.model";

export default function ComponenteActualizarConsultaMedica(){

  const history = useNavigate();
  const { id }: any = useParams();
  const url = `https://localhost:44350/Sistema_Web_OftalmoPlus/consultamedica/${id}`;

  const [consultas_medicas, setConsultasMedicas] = useState<ConsultaMedicaDTO>();
  const peticionesGet = async () => {
    await axios
    .get(url)
    .then((response) => {
        setConsultasMedicas(response.data);
		})
    .catch((error) => {
      console.log(error);
    });
  };
  
  useEffect(() => {
    peticionesGet();
  }, []);

  async function ActualizarConsultaMedica(historia_clinica: ConsultaMedicaDTO) {

    try {
      await axios.put(url, historia_clinica);
      history("/consultas_medicas");
    }
		catch (error) {
    	console.log(error);
    }
  }

    return(
        <div className="content">
            <div className="jumbotron jumbotron-fluid text-white py-2" style={{backgroundColor:'#497C81'}}>
                <div className="container">
                    <h1>Actualizar Consulta Medica</h1>
                </div>
            </div>
            <br />
            <Formik initialValues={{id_ConsultaMedica:0 ,motivoConsulta:"", id_historia_clinica:"", id_empleado:"" ,estadoConsultaMedica:false,}}onSubmit={ async (valores) => {
               await ActualizarConsultaMedica({
                id_ConsultaMedica : valores.id_ConsultaMedica,
                motivoConsulta: valores.motivoConsulta,
                id_historia_clinica : valores.id_historia_clinica,
                id_empleado : valores.id_empleado,
                estadoConsultaMedica: valores.estadoConsultaMedica
                });
              }}
              validationSchema={Yup.object({
                motivoConsulta: Yup.string().required("Este campo es requerido").max(100,"La longitud maxima de este campo es 100 caracteres"),
                id_historia_clinica: Yup.string().required("Este campo es requerido"),
                id_empleado: Yup.string().required("Este campo es requerido")
            })}>
              <Form className="form-control shadow p-3 mb-5 bg-white rounded">
              <div className="row justify-content-center flex-row p-3">
                <div className="col-3">
                    <label className="form-label">Codigo:</label>
                    <Field name="id_ConsultaMedica" type="text" value={consultas_medicas?.id_ConsultaMedica} className="form-control" readonly/>
                </div>
          	  </div>
              <div className="row justify-content-center flex-row p-3">
                <div className="col-3">
                    <label className="form-label">Motivo Consulta:</label>
                    <Field name="motivoConsulta" type="text" value={consultas_medicas?.motivoConsulta} className="form-control"/>
                </div>
              </div>
              <div className="row justify-content-center flex-row p-3">
                <div className="col-3">
                    <label className="form-label">IDHistoria Clinica:</label>
                    <Field name="id_historia_clinica" type="text" value={consultas_medicas?.id_historia_clinica} className="form-control"/>
                </div>
              </div>
              <div className="row justify-content-center flex-row p-3">
                <div className="col-3">
                    <label className="form-label">IDEmpleado:</label>
                    <Field name="id_empleado" type="text" value={consultas_medicas?.id_empleado} className="form-control"/>
                </div>
              </div>
              <div className="row justify-content-center flex-row p-3">
            	<div className="col-3">
              	<label className="form-label">Estado:</label>
            		<div className="col-6 form-check"> {consultas_medicas?.estadoConsultaMedica? (
            			<div>
                  	<Field className="form-check-input" name="estadoConsultaMedica" type="checkbox" checked="true"/>
                  	<label className="form-check-label">Habilitado</label>
                	</div>
                	) : (
                	<div>
                  	<Field className="form-check-input" name="estadoConsultaMedica" type="checkbox"/>
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
                <Link className="btn btn-secondary w-100" to="/consultas_medicas">Cancelar</Link>
                </div>
              </div>

              </Form>

            </Formik>
        </div>
    );
}