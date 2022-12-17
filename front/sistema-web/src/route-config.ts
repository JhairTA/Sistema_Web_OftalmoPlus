import ComponenteActualizarConsultaMedica from "./consultamedica/ComponenteActualizarConsultaMedica";
import ComponenteListaConsultaMedica from "./consultamedica/ComponenteListaConsultaMedica";
import ComponenteRegistrarConsultaMedica from "./consultamedica/ComponenteRegistrarConsultaMedica";
import ComponenteActualizarEmpleado from "./empleados/ComponenteActualizarEmpleado";
import ComponenteListaEmpleado from "./empleados/ComponenteListaEmpleado";
import ComponenteRegistrarEmpleado from "./empleados/ComponenteRegistrarEmpleado";
import ComponenteActualizarHistoriClinica from "./historiasclinicas/ComponenteActualizarHistoriClinica";
import ComponenteListaHistoriaClinica from "./historiasclinicas/ComponenteListaHistoriaClinica";
import ComponenteRegistrarHistoriaClinica from "./historiasclinicas/ComponenteRegistrarHistoriaClinica";
import ComponenteInicio from "./inicio/ComponenteInicio";
import ComponenteActualizarPaciente from "./pacientes/ComponenteActualizarPaciente";
import ComponenteListaPaciente from "./pacientes/ComponenteListaPaciente";
import ComponenteRegistrarPaciente from "./pacientes/ComponenteRegistrarPaciente";
import ComponenteActualizarUsuario from "./usuarios/ComponenteActualizarUsuario";
import ComponenteListaUsuario from "./usuarios/ComponenteListaUsuario";
import ComponenteRegistrarUsuario from "./usuarios/ComponenteRegistrarUsuario";

const rutas=[
{path :'/',componente:ComponenteInicio},
{path :'/usuarios',componente:ComponenteListaUsuario},
{path :'/usuarios/registrar',componente:ComponenteRegistrarUsuario},
{path :'/usuarios/actualizar/:id', componente : ComponenteActualizarUsuario},
{path :'/empleados',componente:ComponenteListaEmpleado},
{path :'/empleados/registrar',componente:ComponenteRegistrarEmpleado},
{path :'/empleados/actualizar/:id',componente:ComponenteActualizarEmpleado},
{path :'/pacientes',componente:ComponenteListaPaciente},
{path :'/pacientes/registrar',componente:ComponenteRegistrarPaciente},
{path :'/pacientes/actualizar/:id',componente:ComponenteActualizarPaciente},
{path :'/historias_clinicas',componente:ComponenteListaHistoriaClinica},
{path :'/historias_clinicas/registrar',componente:ComponenteRegistrarHistoriaClinica},
{path :'/historias_clinicas/actualizar/:id',componente:ComponenteActualizarHistoriClinica},
{path :'/consultas_medicas',componente:ComponenteListaConsultaMedica},
{path :'/consultas_medicas/registrar',componente:ComponenteRegistrarConsultaMedica},
{path :'/consultas_medicas/actualizar/:id',componente:ComponenteActualizarConsultaMedica},
];

export default rutas;