/* eslint-disable jsx-a11y/anchor-is-valid */


export default function ComponenteMenu(){
    return(
    
      <div className='main-container d-flex'>
      
          <div className="sidebar" id='side_nav'>
            <div className="header-box px-2 pt-3 pb-4 titulo">
              <a className='fs-4' href='/'>OftalmoPlus</a>
            </div>
            <ul className='list-unstyled px-2'>
              <li className=''><a href="/empleados" className='text-decoration-none px-3 py-2 d-block'>Empleado</a></li>
              <li className=''><a href="/pacientes" className='text-decoration-none px-3 py-2 d-block'>Paciente</a></li>
              <li className=''><a href="/historias_clinicas" className='text-decoration-none px-3 py-2 d-block'>Historia Clinica</a></li>
              <li className=''><a href="/consultas_medicas" className='text-decoration-none px-3 py-2 d-block'>Consulta Medica</a></li>
              <li className=''><a href="/usuarios" className='text-decoration-none px-3 py-2 d-block'>Usuarios</a></li>
            </ul>
            <hr className='h-color mx-2'/>
            <ul className='list-unstyled px-2'>
              <li className=''><a href="#" className='text-decoration-none px-3 py-2 d-block'>Perfil</a></li>
              <li className=''><a href="#" className='text-decoration-none px-3 py-2 d-block'>Cerrar Sesión</a></li>
            </ul>
          </div>
    </div>


    );
}