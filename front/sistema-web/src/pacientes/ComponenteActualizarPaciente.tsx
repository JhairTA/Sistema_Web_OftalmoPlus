import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PacienteDTO } from "./paciente.model";
import axios from "axios";
import * as Yup from "yup";
import { Field, Formik, Form} from "formik";

export default function ComponenteActualizarPaciente(){

    const history = useNavigate();
    const { id } : any = useParams();
    const url = `https://localhost:44350/Sistema_Web_OftalmoPlus/paciente/${id}`;

    const [pacientes, setPacientes] = useState<PacienteDTO>();
    const peticionesGet = async ()=>{
        await axios
        .get(url)
        .then((response)=>{
            setPacientes(response.data);
        })
        .catch((error) =>{
            console.log(error);
        });
    };

    useEffect(() => {
        peticionesGet();
    }, []);

    async function ActualizarPaciente(paciente: PacienteDTO){
        try {
            await axios.put(url, paciente);
            history("/pacientes");
        }
            catch (error) {
            console.log(error);
        }
    }
    

    return(
        <div className="content">
          <div className="jumbotron jumbotron-fluid text-white py-2" style={{backgroundColor:'#497C81'}}>
            <div className="container">
              <h1>Actualizar Paciente</h1>
            </div>
          </div>
          <br />
          <Formik 
              initialValues={{
              idpaciente:0, dnipaciente: "", nombrepaciente: "", apellidospaciente: "", 
              correopaciente: "", telefonopaciente: "", generopaciente: "", 
              fechanacimientopaciente: "", estadocivilpaciente: "", edadpaciente: "", estadoPaciente:false}} 
              
              onSubmit={ async (valores) => {
                await ActualizarPaciente({
                    idpaciente : valores.idpaciente,
                    dnipaciente: valores.dnipaciente,
                    nombrepaciente: valores.nombrepaciente,
                    apellidospaciente: valores.apellidospaciente,
                    correopaciente: valores.correopaciente,
                    telefonopaciente: valores.telefonopaciente,
                    generopaciente: valores.generopaciente,
                    fechanacimientopaciente: new Date(valores.fechanacimientopaciente),
                    estadocivilpaciente: valores.estadocivilpaciente,
                    edadpaciente: valores.edadpaciente,
                    estadoPaciente: valores.estadoPaciente
                });
              }}
              validationSchema = {Yup.object({
                dnipaciente: Yup.string().required("Este campo es requerido").max(8,"La longitud maxima del DNI es de 8 caracteres"),
                nombrepaciente: Yup.string().required("Este campo es requerido").max(100,"La longitud maxima del nombre es 100 caracteres"),
                apellidospaciente: Yup.string().required("Este campo es requerido").max(100,"La longitud maxima del apellido es 100 caracteres"),
                correopaciente: Yup.string().required("Este campo es requerido").max(100,"La longitud maxima del correo es 100 caracteres"),
                telefonopaciente: Yup.string().required("Este campo es requerido").min(9,"La longitud debe de ser de 9 digitos"),
                generopaciente: Yup.string().required("Este campo es requerido").max(10,"La longitud maxima del genero es 10 caracteres"),
                fechanacimientopaciente: Yup.string().required("Este campo es requerido"),
                estadocivilpaciente: Yup.string().required("Este campo es requerido").max(15,"La longitud maxima del estado civil es 15 caracteres"),
                edadpaciente: Yup.string().required("Este campo es requerido"),
              })}>
                <Form className="form-control shadow p-3 mb-5 bg-white rounded">
                  <div className="row ">
                    <div className="col-md pb-4">
                      <label className="form-label">Codigo:</label>
                      <Field name="idpaciente" type="text" value={pacientes?.idpaciente} className="form-control" readonly/>
                    </div>
                    <div className="col-md pb-4">
                      <label className="form-label">DNI:</label>
                      <Field name="dnipaciente" type="text" value={pacientes?.dnipaciente} className="form-control" readonly/>
                    </div>
                    <div className="col-md pb-4">
                      <label className="form-label">Nombre:</label>
                      <Field name="nombrepaciente" type="text" value={pacientes?.nombrepaciente} className="form-control" readonly/>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-md pb-4">
                      <label className="form-label">Apellido:</label>
                      <Field name="apellidospaciente" type="text" value={pacientes?.apellidospaciente} className="form-control" readonly/>
                    </div>
                    <div className="col-md pb-4">
                      <label className="form-label">Correo:</label>
                      <Field name="correopaciente" type="text" value={pacientes?.correopaciente} className="form-control" readonly/>
                    </div>
                    <div className="col-md pb-4">
                      <label className="form-label">Telefono:</label>
                      <Field name="telefonopaciente" type="text" value={pacientes?.telefonopaciente} className="form-control" readonly/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md pb-4">
                      <label className="form-label">Genero:</label>
                      <Field name="generopaciente" type="text" value={pacientes?.generopaciente} className="form-control" readonly/>
                    </div>
                    <div className="col-md pb-4">
                      <label className="form-label">Fecha de Nacimiento:</label>
                      <Field name="fechanacimientopaciente" type="text" value={pacientes?.fechanacimientopaciente} className="form-control" readonly/>
                    </div>
                    <div className="col-md pb-4">
                      <label className="form-label">Estado Civil:</label>
                      <Field name="estadocivilpaciente" type="text" value={pacientes?.estadocivilpaciente} className="form-control" readonly/>
                    </div>
                  </div>

                  <div className="row flex-row">
                  <div className="col-4">
                      <label className="form-label">Edad:</label>
                      <Field name="estadocivilpaciente" type="text" value={pacientes?.edadpaciente} className="form-control" readonly/>
                  </div>
                  </div>
                  <br />
                  <div className="row  flex-row p-3">
            	    <div className="col-3">
              	        <label className="form-label">Estado:</label>
            		    <div className="col-6 form-check"> {pacientes?.estadoPaciente? (
                            <div>
                                <Field className="form-check-input" name="estadoPaciente" type="checkbox" checked="true"/>
                                <label className="form-check-label">Habilitado</label>
                            </div>
                            ) : (
                            <div>
                                <Field className="form-check-input" name="estadoPaciente" type="checkbox"/>
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
                            <Link className="btn btn-warning w-100" to="/pacientes">Cancelar</Link>
                        </div>
                    </div>
                </Form>
          </Formik>
        </div>
    );
}