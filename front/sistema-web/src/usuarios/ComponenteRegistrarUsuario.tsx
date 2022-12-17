import axios from "axios";
import {  Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import {  UsuarioRegistrarDTO } from "./usuario.model";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";


export default function ComponenteRegistrarUsuario(){


  const history = useNavigate();
  const url="https://localhost:44350/Sistema_Web_OftalmoPlus/usuario";
  
  async function RegistrarUsuario(usuario : UsuarioRegistrarDTO){
    try {
      await axios.post(url, usuario);
      history("/usuarios");
    } 
    catch (error) {
      console.log(error);
    }
  }

return(
  <div className="container">
    <h1 className="text-center m-4">Registro de Usuarios</h1>
    <Formik initialValues={{ nombreUsuario: "", contraseñaUsuario: "", estadoUsuario: "",}}
    onSubmit={async (valores) => {
    	await new Promise((r) => setTimeout(r, 1000));
      var est = false;
      if(valores.estadoUsuario === ""){
          est = false;
      }
      else{
          est = true;
      } 
      await RegistrarUsuario({
        nombreUsuario: valores.nombreUsuario,
        contraseñaUsuario : valores.contraseñaUsuario,
        estadoUsuario: est
        });
      }}  
      validationSchema={Yup.object({
        nombreUsuario: Yup.string().required("Este campo es requerido").max(100,"La longitud maxima del nombre es 100 caracteres"),
        contraseñaUsuario : Yup.string().required("Este campo es requerido").max(100,"La longitud maxima del nombre es 100 caracteres")}
        )}>
          <Form className="form-control m-1 shadow p-3 mb-5 bg-white rounded">
            <ComponenteFormularioCajaTexto campo="nombreUsuario" label="Username:"/>
            <ComponenteFormularioCajaTexto campo="contraseñaUsuario" label="Password:"/>
            <div className="row justify-content-center p-3">
              <div className="col-3">
                <label className="form-label">Estado:</label>
              <div className="col-6 form-check">
                <Field  className="form-check-input" name="estadoUsuario" type="checkbox"/>
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
                <Link className="btn btn-warning w-100" to="/usuarios">Cancelar</Link>
              </div>
            </div>
          </Form>
    </Formik>
  </div>
  );
}
