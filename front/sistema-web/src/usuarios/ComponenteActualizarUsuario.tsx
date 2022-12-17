/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { UsuarioDTO } from "./usuario.model";
export default function ComponenteActualizarUsuario(){

	const history = useNavigate();
  const { id }: any = useParams();
  const url = `https://localhost:44350/Sistema_Web_OftalmoPlus/usuario/${id}`;
  
  const [usuarios, setUsuarios] = useState<UsuarioDTO>();
  const peticionesGet = async () => {
    await axios
    .get(url)
    .then((response) => {
      setUsuarios(response.data);
		})
    .catch((error) => {
      console.log(error);
    });
  };
  
  useEffect(() => {
    peticionesGet();
  }, []);

  async function ActualizarUsuario(usuario: UsuarioDTO) {

    try {
      await axios.put(url, usuario);
      history("/usuarios");
    }
		catch (error) {
    	console.log(error);
    }
  }
    

	return(
		<div className="container">
    	<h1 className="text-center m-4">Actualizacion de Usuarios</h1>
      <Formik initialValues={{ id_Usuario: 0, nombreUsuario: "", contraseñaUsuario : "", estado: false}} onSubmit={ async (valores) => {
        await ActualizarUsuario({
          id_Usuario : valores.id_Usuario,
          nombreUsuario: valores.nombreUsuario,
					contraseñaUsuario : valores.contraseñaUsuario,
          estadoUsuario: valores.estado
          });
        }}
        validationSchema={Yup.object({
          nombreUsuario: Yup.string().required("Este campo es requerido").max(100, "La longitud máxima del nombre es 100 caracteres"),
        })}>
        	<Form className="form-control m-1 shadow p-3 mb-5 bg-white rounded">
            <div className="row justify-content-center flex-row p-3">
              <div className="col-3">
                <label className="form-label">Codigo:</label>
                <Field name="id_Usuario" type="text" value={usuarios?.id_Usuario} className="form-control" readonly/>
              </div>
          	</div>

           	<div className="row justify-content-center flex-row p-3">
              <div className="col-3">
              	<label className="form-label">Username:</label>
              	<Field name="nombreUsuario" type="text" value={usuarios?.nombreUsuario} className="form-control"/>
              </div>
            </div>

						<div className="row justify-content-center flex-row p-3">
              <div className="col-3">
              	<label className="form-label">Password:</label>
              	<Field name="contraseñaUsuario" type="text" value={usuarios?.contraseñaUsuario} className="form-control"/>
              </div>
            </div>

           	<div className="row justify-content-center flex-row p-3">
            	<div className="col-3">
              	<label className="form-label">Estado:</label>
            		<div className="col-6 form-check"> {usuarios?.estadoUsuario? (
            			<div>
                  	<Field className="form-check-input" name="estadoUsuario" type="checkbox" checked="true"/>
                  	<label className="form-check-label">Habilitado</label>
                	</div>
                	) : (
                	<div>
                  	<Field className="form-check-input" name="estadoUsuario" type="checkbox"/>
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
              <Link className="btn btn-secondary w-100" to="/usuarios">Cancelar</Link>
              </div>
            </div>

          </Form>
      </Formik>
    </div> 
	);
}