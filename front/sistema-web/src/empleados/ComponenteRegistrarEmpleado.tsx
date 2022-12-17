import axios from "axios";
import {  Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import {  EmpleadoRegistrarDTO } from "./empleado.model";
import { UsuarioDTO } from "../usuarios/usuario.model";
import { useEffect, useState } from "react";





export default function ComponenteRegistrarEmpleado(){

	const history = useNavigate();
	const url="https://localhost:44350/Sistema_Web_OftalmoPlus/empleado";
	const url2="https://localhost:44350/Sistema_Web_OftalmoPlus/usuario";

  

	
const [usuarios, setUsuarios] = useState<UsuarioDTO[]>();

	const peticionesGet = async () => {
			await axios.get(url2).then((response) => {
				 setUsuarios(response.data)
				})
				.catch((error) => {
					console.log(error);
				});
		};

	
	useEffect(() => {
		peticionesGet();
	}, []);
	

	async function RegistrarEmpleado(empleado : EmpleadoRegistrarDTO){
    try {
      await axios.post(url, empleado);
      history("/empleados");
    } 
    catch (error) {
      console.log(error);
    }
  }

	return(
		<div className="container">
    	<h1 className="text-center m-4">Registro de Empleados</h1>
    	<Formik initialValues={{ dni_empleado : "", nombre_empleado: "", apellido_empleado : "", telefono_empleado : "", correo_empleado : "", genero_empleado : "", cargo_empleado : "", estadoEmpleado : "", id_Usuario : ""}}
    onSubmit={async (valores) => {
    	await new Promise((r) => setTimeout(r, 1000));
      var est = false;
      if(valores.estadoEmpleado	 === ""){
          est = false;
      }
      else{
          est = true;
      } 
      await RegistrarEmpleado({
				dni_empleado : valores.dni_empleado,
        nombre_empleado: valores.nombre_empleado,
				apellido_empleado : valores.apellido_empleado,
				telefono_empleado : valores.telefono_empleado,
				correo_empleado : valores.correo_empleado,
				genero_empleado : valores.genero_empleado,
				cargo_empleado : valores.cargo_empleado,
        estadoEmpleado	: est,
				id_Usuario : valores.id_Usuario
        });
      }}  
      validationSchema={Yup.object({
        dni_empleado: Yup.string().required("Este campo es requerido").max(8,"La longitud maxima del DNI es 8 caracteres").min(8,"Debe ingresar 8 caracteres como minimo"),
        nombre_empleado: Yup.string().required("Este campo es requerido").max(100,"La longitud maxima del nombre es 100 caracteres"),
        apellido_empleado : Yup.string().required("Este campo es requerido").max(30, "La longitud maxima del apellido es 30 caracteres"),
        telefono_empleado : Yup.string().required("Este campo es requerido").max(9, "La longitud maxima del celular es de 9").min(9, "Debe ingresar como minimo 9 caracteres"),
        genero_empleado :  Yup.string().required("Este campo es requerido").max(9, "Ingrese Masculino o Femenino").min(8, "Ingrese Masculino o Femenino"),
        cargo_empleado :  Yup.string().required("Este campo es requerido").max(15, "La longitud maxima de caracteres es 15")
        }
        )}>
          <Form className="form-control m-1 shadow p-3 mb-5 bg-white rounded">
						<div className="row">
              <div className="col-6">
                <ComponenteFormularioCajaTexto campo="dni_empleado" label="DNI"/>
                <ComponenteFormularioCajaTexto campo="nombre_empleado" label="Nombres"/>
                <ComponenteFormularioCajaTexto campo="apellido_empleado" label="Apellidos"/>
              </div>
              <div className="col-6">
                <ComponenteFormularioCajaTexto campo="telefono_empleado" label="Celular"/>
                <div className="row justify-content-center flex-row p-3">
                  <div className="col-6">
                    <label className="form-label">Email:</label>
                    <Field className="form-control" name="correo_empleado" type="email" required/>
                  </div>
                </div>
                <ComponenteFormularioCajaTexto campo="genero_empleado" label="Genero"/>
                
              </div>
              <ComponenteFormularioCajaTexto campo="cargo_empleado" label="Cargo"/>
              
            </div>

						<div className="row justify-content-center p-3">
              <div className="col-6 text-center align-items-center">
                <label className="form-label">Username:</label>
								<div className="col-5 form-check mx-auto">
									<Field as="select" className="form-select " name="id_Usuario">
                      <option value="" disabled>Seleccione un Usuario</option>
											{usuarios?.map((elemento) => (
												<option key={elemento.id_Usuario} value={elemento.id_Usuario}>{elemento.nombreUsuario}</option>
											))}
									</Field>
								</div>
            	</div>
          	</div>

						
						
            <div className="row justify-content-center p-3">
              <div className="col-6 text-center align-items-center">
                <label className="form-label">Estado:</label>
                <div className="col-2 form-check mx-auto">
                  <Field  className="form-check-input" name="estadoEmpleado" type="checkbox"/>
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
                <Link className="btn btn-warning w-100" to="/empleados">Cancelar</Link>
              </div>
            </div>
          </Form>
    </Formik>
  </div>
  );

		
		
		
		
		
	}