import axios from "axios";
import {  Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { ConsultaMedicaRegistrarDTO } from "./consultanedica.model";
import { useEffect, useState } from "react";
import { HistoriaClinicaDTO } from "../historiasclinicas/historiaclinica.model";
import { EmpleadoDTO } from "../empleados/empleado.model";

export default function ComponenteRegistrarConsultaMedica(){

    const history = useNavigate();
    const url="https://localhost:44350/Sistema_Web_OftalmoPlus/consultamedica";

    const url2="https://localhost:44350/Sistema_Web_OftalmoPlus/historiaclinica";
    const [historias, setHistoriasClinicas] = useState<HistoriaClinicaDTO[]>();

    const peticionesGet = async () => {
    await axios.get(url2).then((response) => {
        setHistoriasClinicas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    useEffect(() => {
    peticionesGet();
    }, []);

  const url3="https://localhost:44350/Sistema_Web_OftalmoPlus/empleado";

  const [empleados, setEmpleados] = useState<EmpleadoDTO[]>();

  const peticionesGet2 = async () => {
    await axios.get(url3).then((response) => {
        setEmpleados(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionesGet2();
  }, []);





    async function RegistrarConsultaMedica(consulta_medica : ConsultaMedicaRegistrarDTO){
        try {
          await axios.post(url, consulta_medica);
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
                <h1>Registro de Consultas Medicas</h1>
                </div>
            </div>
            <br />
            <Formik 
            initialValues={{motivoConsulta:"", id_historia_clinica:"", id_empleado:"" ,estadoConsultaMedica:"",}}
            onSubmit={async (valores) => {
                await new Promise((r) => setTimeout(r, 1000));
                var est = false;
                if(valores.estadoConsultaMedica === ""){
                    est = false;
                }
                else{
                    est = true;
                } 
                await RegistrarConsultaMedica({
                    motivoConsulta: valores.motivoConsulta,
                    id_historia_clinica : valores.id_historia_clinica,
                    id_empleado : valores.id_empleado,
                    estadoConsultaMedica: est
                  });
                }}
                validationSchema={Yup.object({
                    motivoConsulta: Yup.string().required("Este campo es requerido").max(100,"La longitud maxima de este campo es 100 caracteres"),
                    id_historia_clinica: Yup.string().required("Este campo es requerido"),
                    id_empleado: Yup.string().required("Este campo es requerido")}
                )}>
                  <Form className="form-control  shadow p-3 mb-5 bg-white rounded">
                    
                    <div className="row justify-content-center p-3">
                      <div className="col-6 text-center align-items-center">
                        <label className="form-label">Historia Clinica:</label>
                        <div className="col-6 form-check mx-auto">
                          <Field as="select" className="form-select text-center" name="id_historia_clinica">
                              <option value="" disabled>Selecciona una Historia Clinica</option>
                              {historias?.map((elemento) => (
                                <option key={elemento.id_historia_clinica} value={elemento.id_historia_clinica}>{elemento.id_historia_clinica}</option>
                              ))}
                          </Field>
                        </div>
                      </div>
          	        </div>

                    <div className="row justify-content-center p-3">
                      <div className="col-6 text-center align-items-center">
                        <label className="form-label">Doctor(a):</label>
                        <div className="col-6 form-check mx-auto">
                          <Field as="select" className="form-select text-center" name="id_empleado">
                              <option disabled value="">Seleccione un Doctor(a)</option>
                              {empleados?.map((elemento) => (
                                <option key={elemento.id_empleado} value={elemento.id_empleado}>{elemento.nombre_empleado}</option>
                              ))}
                          </Field>
                        </div>
                      </div>
          	        </div>
                    <ComponenteFormularioCajaTexto campo="motivoConsulta" label="Motivo Consulta:"/>
                  


                  <div className="row  p-3">
                    <div className="col-3">
                        <label className="form-label">Estado:</label>
                        <div className="col-6 form-check">
                            <Field  className="form-check-input" name="estadoConsultaMedica" type="checkbox"/>
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
                        <Link className="btn btn-warning w-100" to="/consultas_medicas">Cancelar</Link>
                    </div>
                  </div>
                </Form>

            </Formik>



        </div>
    );
}