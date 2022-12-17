using Aplicacion_Web2.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aplicacion_Web2.Controllers
{
    [ApiController]
    [Route("Sistema_Web_OftalmoPlus/empleado")]
    public class EmpleadoController: ControllerBase
    {
        private readonly ApplicationDBContext context;

        //creamos el metodo constructor
        public EmpleadoController(ApplicationDBContext context)
        {
            this.context = context;
        }

        // Cuando queremos obtener informacion
        [HttpGet]
        public async Task<ActionResult<List<Empleado>>> findAll()
        {
            return await context.Empleado.Include(x => x.usuario).ToListAsync();
        }


        [HttpGet("custom")]
        public async Task<ActionResult<List<Empleado>>> findAllCustom()
        {
            return await context.Empleado.Where(x => x.estadoEmpleado == true).ToListAsync(); //Cambiar estado(traer true o false)
        }

        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Empleado e)
        {
            // Verificando la existencia del usuario
            var usuarioexiste = await context.Usuario
                .AnyAsync(x => x.id_Usuario == e.id_Usuario);

            if (!usuarioexiste)
            {
                return NotFound($"No existe el usuario con codigo: {e.id_Usuario}");
            }
            context.Add(e);
            await context.SaveChangesAsync();
            return Ok();
        }

        // Cuando queremos buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Empleado>> findById(int id)
        {
            var empleado = await context.Empleado.
                FirstOrDefaultAsync(x => x.id_empleado == id);
            return empleado;
        }

        //Cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Empleado e, int id)
        {
            if (e.id_empleado != id)
            {
                return BadRequest("No se encuentra el codigo correspondiente");
            }
            context.Update(e);
            await context.SaveChangesAsync();
            return Ok();
        }

        //Cuando queremos eliminar informacion
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Empleado.AnyAsync(x => x.id_empleado == id);
            if (!existe)
            {
                return NotFound();
            }
            var empleado = await context.Empleado.FirstOrDefaultAsync(x => x.id_empleado == id);
            empleado.estadoEmpleado = false;
            context.Update(empleado);
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
