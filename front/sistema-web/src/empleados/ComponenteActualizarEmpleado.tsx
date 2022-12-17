/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { EmpleadoDTO } from "./empleado.model";


export default function ComponenteActualizarEmpleado(){
	
	const history = useNavigate();
	const { id }: any = useParams();
	const url = `https://localhost:44350/Sistema_Web_OftalmoPlus/empleado/${id}`;
	

	const [empleados, setEmpleados] = useState<EmpleadoDTO>();

  const peticionesGet = async () => {
    await axios.get(url).then((response) => {
        setEmpleados(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionesGet();
  }, []);

  async function ActualizarEmpleado(empleado: EmpleadoDTO) {

    try {
      await axios.put(url, empleado);
      history("/empleados");
    }
		catch (error) {
    	console.log(error);
    }
  }
	return(
		<div className="container">
    	<h1 className="text-center m-4">Actualización de Empleados</h1>
    	<Formik initialValues={{ id_empleado : 0, dni_empleado : "", nombre_empleado: "", apellido_empleado : "", telefono_empleado : "", correo_empleado : "", genero_empleado : "", cargo_empleado : "", estadoEmpleado : false, id_Usuario : ""}}
    onSubmit={async (valores) => {
    	
      await ActualizarEmpleado({
				id_empleado : valores.id_empleado,
				dni_empleado : valores.dni_empleado,
        nombre_empleado: valores.nombre_empleado,
				apellido_empleado : valores.apellido_empleado,
				telefono_empleado : valores.telefono_empleado,
				correo_empleado : valores.correo_empleado,
				genero_empleado : valores.genero_empleado,
				cargo_empleado : valores.cargo_empleado,
        estadoEmpleado	: valores.estadoEmpleado,
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
              <div className="col-4 mb-4">
								<label className="form-label">Codigo Trabajador:</label>
								<Field name="id_empleado" type="text" className="form-control" value={empleados?.id_empleado}/>
              </div>

							<div className="col-4 mb-4">
								<label className="form-label">DNI:</label>
								<Field name="dni_empleado" className="form-control" type="text" value={empleados?.dni_empleado}/>
              </div>

							<div className="col-4 mb-4">
								<label className="form-label">Nombres:</label>
								<Field name="nombre_empleado" className="form-control" type="text" value={empleados?.nombre_empleado}/>
              </div>

							<div className="col-4 mb-4">
								<label className="form-label">Apellidos:</label>
								<Field name="apellido_empleado" className="form-control" type="text" value={empleados?.apellido_empleado}/>
              </div>

							<div className="col-4 mb-4">
								<label className="form-label">Celular:</label>
								<Field name="telefono_empleado" className="form-control" type="text" value={empleados?.telefono_empleado}/>
              </div>

							<div className="col-4 mb-4">
								<label className="form-label">Correo:</label>
								<Field name="correo_empleado" className="form-control" type="text" value={empleados?.correo_empleado}/>
              </div>

							<div className="col-4 mb-4">
								<label className="form-label">Genero:</label>
								<Field name="genero_empleado" className="form-control" type="text" value={empleados?.genero_empleado}/>
              </div>

							<div className="col-4 mb-4">
								<label className="form-label">Cargo Trabajador:</label>
								<Field name="cargo_empleado" className="form-control" type="text" value={empleados?.cargo_empleado}/>
              </div>

							<div className="col-4 mb-4">
								<label className="form-label">Username:</label>
								<Field name="id_Usuario" className="form-control" type="text" value={empleados?.id_Usuario}/>
							</div>
            </div>
						

						<div className="col-4 mb-4">
							<label className="form-label">Estado:</label>
            	<div className="col-6 form-check"> {empleados?.estadoEmpleado? (
            		<div>
                  <Field className="form-check-input" name="estadoEmpleado" type="checkbox" checked="true"/>
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