import { Link, useNavigate } from "react-router-dom";
import { PacienteRegistrarDTO } from "./paciente.model";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";

export default function ComponenteRegistrarPaciente(){

    const history = useNavigate();
    const url="https://localhost:44350/Sistema_Web_OftalmoPlus/paciente";

    async function RegistrarPaciente(paciente:PacienteRegistrarDTO) {
        try{
            await axios.post(url, paciente);
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
                <h1>Registro de Paciente</h1>
                </div>
            </div>
            <br />
            <Formik 
                initialValues={{
                    dnipaciente: "", nombrepaciente: "", apellidospaciente: "", 
                    correopaciente: "", telefonopaciente: "", generopaciente: "", 
                    fechanacimientopaciente: "", estadocivilpaciente: "", edadpaciente: "", estadoPaciente:"",
                }}
                
                onSubmit={async (valores) => {
                    await new Promise((r)=> setTimeout(r, 1000));
                    var est = false;
                    if(valores.estadoPaciente === ""){
                        est = false;
                    }else{
                        est = true;
                    }
                    await RegistrarPaciente({
                        dnipaciente: valores.dnipaciente,
                        nombrepaciente: valores.nombrepaciente,
                        apellidospaciente: valores.apellidospaciente,
                        correopaciente: valores.correopaciente,
                        telefonopaciente: valores.telefonopaciente,
                        generopaciente: valores.generopaciente,
                        fechanacimientopaciente: new Date(valores.fechanacimientopaciente),
                        estadocivilpaciente: valores.estadocivilpaciente,
                        edadpaciente: valores.edadpaciente,
                        estadoPaciente: est
                    });
                }}
                validationSchema = {Yup.object({
                  dnipaciente: Yup.string().required("Este campo es requerido").max(8,"La longitud maxima del DNI es de 8 caracteres"),
                  nombrepaciente: Yup.string().required("Este campo es requerido").max(100,"La longitud maxima del nombre es 100 caracteres"),
                  apellidospaciente: Yup.string().required("Este campo es requerido").max(100,"La longitud maxima del apellido es 100 caracteres"),
                  correopaciente: Yup.string().required("Este campo es requerido").max(100,"La longitud maxima del correo es 100 caracteres"),
                  telefonopaciente: Yup.string().required("Este campo es requerido").min(9,"La longitud debe de ser de 9 digitos").max(9,"La longitud debe de ser de 9 digitos"),
                  generopaciente: Yup.string().required("Este campo es requerido").max(10,"La longitud maxima del genero es 10 caracteres"),
                  fechanacimientopaciente: Yup.string().required("Este campo es requerido"),
                  estadocivilpaciente: Yup.string().required("Este campo es requerido").max(15,"La longitud maxima del estado civil es 15 caracteres"),
                  edadpaciente: Yup.string().required("Este campo es requerido"),
                })}
                >
                <Form className="form-control  ml-2 shadow p-3 mb-5 bg-white rounded">
                  <div className="row">
                    <div className="col-md pb-4"> 
                        <ComponenteFormularioCajaTexto campo="dnipaciente" label="DNI:"/>
                    </div>
                    <div className="col-md pb-4">
                        <ComponenteFormularioCajaTexto campo="nombrepaciente" label="Nombre:"/>
                    </div>
                    <div className="col-md pb-4">
                        <ComponenteFormularioCajaTexto campo="apellidospaciente" label="Apellido:"/>

                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md pb-4">
                      <ComponenteFormularioCajaTexto campo="correopaciente" label="Correo:"/>
                    </div>
                    <div className="col-md pb-4">
                      <ComponenteFormularioCajaTexto campo="telefonopaciente" label="Telefono:"/>
                    </div>
                    <div className="col-md pb-4">
                      <ComponenteFormularioCajaTexto campo="generopaciente" label="Genero:"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md pb-4">
                      <ComponenteFormularioCajaTexto campo="fechanacimientopaciente" label="Fecha-Nacimiento:"/>
                    </div>
                    <div className="col-md pb-4">
                      <ComponenteFormularioCajaTexto campo="estadocivilpaciente" label="Estado Civil:"/>
                    </div>
                    <div className="col-md pb-4">
                      <ComponenteFormularioCajaTexto campo="edadpaciente" label="Edad:"/>
                    </div>
                  </div>

                  <div className="row  p-3">
                    <div className="col-3">
                      <label className="form-label">Estado:</label>
                      <div className="col-6 form-check">
                        <Field  className="form-check-input" name="estadoPaciente" type="checkbox"/>
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
                        <Link className="btn btn-warning w-100" to="/pacientes">Cancelar</Link>
                    </div>
                  </div>
                </Form>
            </Formik>
        </div>
    );
}