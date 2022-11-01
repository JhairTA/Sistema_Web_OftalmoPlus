using Aplicacion_Web2.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aplicacion_Web2.Controllers
{


    //Indicamos que es un controlador
    [ApiController]
    //Es definir la ruta de acceso al controlador
    [Route("Sistema_Web_OftalmoPlus/doctor")]

    public class DoctorController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        //creamos el metodo constructor
        public DoctorController(ApplicationDBContext context)
        {
            this.context = context;
        }

        // Cuando queremos obtener informacion
        [HttpGet]
        public async Task<ActionResult<List<Doctor>>> findAll()
        {
            return await context.Doctor.ToListAsync();
        }

        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Doctor d)
        {
            // Verificando la existencia del usuario
            var usuarioexiste = await context.Usuario
                .AnyAsync(x => x.id_Usuario == d.id_Usuario);

            if (!usuarioexiste)
            {
                return NotFound($"No existe el autor con codigo: {d.id_Usuario}");
            }
            context.Add(d);
            await context.SaveChangesAsync();
            return Ok();
        }

        // Cuando queremos buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Doctor>> findById(int id)
        {
            var doctor = await context.Doctor.
                FirstOrDefaultAsync(x => x.id_doctor == id);
            return doctor;
        }

        //Cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Doctor d, int id)
        {
            if (d.id_doctor != id)
            {
                return BadRequest("No se encuentra el codigo correspondiente");
            }
            context.Update(d);
            await context.SaveChangesAsync();
            return Ok();
        }

        //Cuando queremos eliminar informacion   (BORRA DE LA BASE DE DATOS)
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Doctor.AnyAsync(x => x.id_doctor == id);
            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Doctor() { id_doctor = id });
            await context.SaveChangesAsync();
            return Ok();
        }

        /*[HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Paciente.AnyAsync(x => x.id_paciente == id);
            if (!existe)
            {
                return NotFound();
            }
            var paciente = await context.Paciente.FirstOrDefaultAsync(x => x.id_paciente == id);
            paciente.estado = false;
            context.Update(paciente);
            await context.SaveChangesAsync();
            return Ok();
        }*/
    }
}