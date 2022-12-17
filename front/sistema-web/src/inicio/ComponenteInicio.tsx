import empleados2 from '../images/empleados2.png';
import historia_clinica from '../images/historia_clinica.jpeg';
import usuario2 from '../images/usuario2.png';
import paciente from '../images/paciente.png';
import consulta_medica from '../images/consulta_medica.png';

export default function ComponenteInicio(){
    return(
        <div className="content">
            <div className="jumbotron jumbotron-fluid text-white py-2" style={{backgroundColor:'#497C81'}}>
                <div className="container">
                <h1>Bienvenido al Sistema</h1>
                </div>
            </div>
            <div className='container contenedor'>
            <div className="row row-cols-1 row-cols-md-3 g-4 cartas">
                <div className="col pt-3">
                <div className="card border-dark shadow p-3 mb-5 bg-white rounded">
                    <img src={usuario2} height="120" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                    <div className="d-grid gap-2">
                    <a href="/usuarios" className="btn text-white" style={{backgroundColor:'#9015D2'}}>Usuario</a>
                    </div>
                    <p className="card-text">Registrar, eliminar o actualizar detalles usuarios.</p>
                    </div>
                </div>
                </div>
                <div className="col pt-3">
                <div className="card border-info shadow p-3 mb-5 bg-white rounded">
                    <img src={empleados2} height="120"  className="card-img-top " alt="..."/>
                    <div className="card-body text-center">
                    <div className="d-grid gap-2">
                    <a href="/empleados" className="btn text-white" style={{backgroundColor:'#AFB804'}}>Empleado</a>
                    </div>
                    <p className="card-text">Registrar, eliminar o actualizar detalles empleados.</p>
                    </div>
                </div>
                </div>
                <div className="col pt-3">
                <div className="card border-danger shadow p-3 mb-5 bg-white rounded">
                    <img src={paciente} height="120" className="card-img-top " alt="..."/>
                    <div className="card-body text-center">
                    <div className="d-grid gap-2">
                    <a href="/pacientes" className="btn text-white" style={{backgroundColor:'#D78D02'}}>Paciente</a>
                    </div>
                    <p className="card-text">Registrar, eliminar o actualizar detalles paciente.</p>
                    </div>
                </div>
                </div>
                <div className="col pt-3">
                <div className="card border-primary shadow p-3 mb-5 bg-white rounded">
                    <img src={historia_clinica} height="130" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                    <div className="d-grid gap-2 ">
                    <a href="/historias_clinicas" className="btn text-white" style={{backgroundColor:'#148FBA'}}>Historia Clinica</a>
                    </div>
                    <p className="card-text">Registrar, eliminar o actualizar detalles Historia clinica.</p>
                    </div>
                </div>
                </div>
                <div className="col pt-3">
                <div className="card border-success shadow p-3 mb-5 bg-white rounded">
                    <img src={consulta_medica} height="150" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                    <div className="d-grid gap-2">
                    <a href="/consultas_medicas" className="btn text-white" style={{backgroundColor:'#07B011'}}>Consulta Medica</a>
                    </div>
                    <p className="card-text">Registrar, eliminar o actualizar detalles consultas.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}