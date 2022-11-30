using Aplicacion_Web2.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aplicacion_Web2.Controllers
{
    //Indicamos que es un controlador
    [ApiController]
    //Es definir la ruta de acceso al controlador
    [Route("Sistema_Web_OftalmoPlus/paciente")]
    public class PacienteController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        //creamos el metodo constructor
        public PacienteController(ApplicationDBContext context)
        {
            this.context = context;
        }

        //Cuando queremos obtener informacion
        [HttpGet]
        public async Task<ActionResult<List<Paciente>>> finnAll()
        {
            return await context.Paciente.ToListAsync();
        }

        //Cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Paciente p)
        {
            context.Add(p);
            await context.SaveChangesAsync();
            return Ok();
        }

        //Cuando queremos buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Paciente>> findById(int id)
        {
            var paciente = await context.Paciente.FirstOrDefaultAsync(x => x.idpaciente == id);
            return paciente;
        }

        //Cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Paciente p, int id)
        {
            if (p.idpaciente != id)
            {
                return BadRequest("No se encuentra el codigo correspondiente");
            }

            context.Update(p);
            await context.SaveChangesAsync();
            return Ok();
        }

       
        //Cuando queremos eliminar informacion
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Paciente.AnyAsync(x => x.idpaciente == id);
            if (!existe)
            {
                return NotFound();
            }
            var paciente = await context.Paciente.FirstOrDefaultAsync(x => x.idpaciente == id);
            paciente.estadoPaciente = false;
            context.Update(paciente);
            await context.SaveChangesAsync();
            return Ok();
        }

    }
}
