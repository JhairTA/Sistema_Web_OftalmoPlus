import axios from "axios";
import {  Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { HistoriaClinicaRegistrarDTO } from "./historiaclinica.model";
import { PacienteDTO } from "../pacientes/paciente.model";
import { useEffect, useState } from "react";

export default function ComponenteRegistrarHistoriaClinica() {

  const history = useNavigate();
  const url="https://localhost:44350/Sistema_Web_OftalmoPlus/historiaclinica";

  const url2="https://localhost:44350/Sistema_Web_OftalmoPlus/paciente";

    const [pacientes, setPacientes] = useState<PacienteDTO[]>();

    const peticionesGet = async () => {
        await axios.get(url2).then((responde)=>{
            setPacientes(responde.data);
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    useEffect(() => {
        peticionesGet();
      }, []);



      
  async function RegistrarHistoriaClinica(historia_clinica : HistoriaClinicaRegistrarDTO){
    try {
      await axios.post(url, historia_clinica);
      history("/historias_clinicas");
    } 
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="content">
      <div
        className="jumbotron jumbotron-fluid text-white py-2"
        style={{ backgroundColor: "#497C81" }}
      >
        <div className="container">
          <h1>Registro de Historia Clinica</h1>
        </div>
      </div>
      <br/>
      <Formik 
        initialValues={{idpaciente: "", enfermedad_personal:"", alergias: "", enfermedades_oculares:"",
        uso_medicamentos: "", operaciones:"", motivo_consulta: "", estadoHistoriaclinica:"",}}
        onSubmit={async (valores) => {
          await new Promise((r) => setTimeout(r, 1000));
          var est = false;
          if(valores.estadoHistoriaclinica === ""){
              est = false;
          }
          else{
              est = true;
          }
          await RegistrarHistoriaClinica({
            idpaciente: valores.idpaciente,
            enfermedad_personal : valores.enfermedad_personal,
            alergias : valores.alergias,
            enfermedades_oculares : valores.enfermedades_oculares,
            uso_medicamentos : valores.uso_medicamentos,
            operaciones : valores.operaciones,
            motivo_consulta : valores.motivo_consulta,
            estadoHistoriaclinica: est
            });
        }}
        validationSchema={Yup.object({
          enfermedad_personal: Yup.string().required("Este campo es requerido").max(30,"La longitud maxima para este campo es 30 caracteres"),
          alergias: Yup.string().required("Este campo es requerido").max(30,"La longitud maxima para este campo es 30 caracteres"),
          enfermedades_oculares: Yup.string().required("Este campo es requerido").max(30,"La longitud maxima para este campo es 30 caracteres"),
          uso_medicamentos: Yup.string().required("Este campo es requerido").max(30,"La longitud maxima para este campo es 30 caracteres"),
          operaciones: Yup.string().required("Este campo es requerido").max(30,"La longitud maxima para este campo es 30 caracteres"),
          motivo_consulta: Yup.string().required("Este campo es requerido").max(30,"La longitud maxima para este campo es 30 caracteres")}
        )}>


      
        <Form className="form-control  shadow p-3 mb-5 bg-white rounded">
          <div className="row">
            
            <div className="row justify-content-center flex-row p-3">
              <div className="col-3">
                <label className="form-label">DNI Paciente</label>
                  <Field as="select" className="form-select" name="idpaciente" required>
                    <option value="" disabled>Seleccione un DNI Paciente</option>
                    {pacientes?.map((elemento) => (
                      <option key={elemento.idpaciente} value={elemento.idpaciente}>{elemento.dnipaciente}</option>
                      ))}
                  </Field>
                </div>
            </div>
            
              
            
            <div className="col-md pb-4">
              <ComponenteFormularioCajaTexto campo="enfermedad_personal" label="Enfermedad Personal:"/>
            </div>
          </div>

          <div className="row">
            <div className="col-md pb-4">
              <ComponenteFormularioCajaTexto campo="alergias" label="Alergias:"/>
            </div>
            <div className="col-md pb-4">
              <ComponenteFormularioCajaTexto campo="enfermedades_oculares" label="Enfermedades Oculares:"/>
            </div>
          </div>

          <div className="row">
            <div className="col-md pb-4">
              <ComponenteFormularioCajaTexto campo="uso_medicamentos" label="Uso de Medicamentos:"/>
            </div>
            <div className="col-md pb-4">
              <ComponenteFormularioCajaTexto campo="operaciones" label="Operaciones:"/>
            </div>
          </div>
          <ComponenteFormularioCajaTexto campo="motivo_consulta" label="Motivo Consulta:"/>
          <div className="row  p-3">
              <div className="col-3">
                <label className="form-label">Estado:</label>
                <div className="col-6 form-check">
                  <Field  className="form-check-input" name="estadoHistoriaclinica" type="checkbox"/>
                  <label className="form-check-label">Habilitado</label>
                </div>
              </div>
            </div> 
            <div className="row justify-content-center flex-row-cols-1">
              <div className="col-2"> 
                <button type="submit" className="btn btn-success w-100">
                      Registrar
                </button> 
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
