using Aplicacion_Web2.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aplicacion_Web2.Controllers
{
    [ApiController]
    [Route("Sistema_Web_OftalmoPlus/usuario")]
    public class UsuarioController: ControllerBase
    {
        private readonly ApplicationDBContext context;

        //Creamos el metodo constructor
        public UsuarioController(ApplicationDBContext context)
        {
            this.context = context;
        }


        //Cuando queremos obtener informacion
        [HttpGet]
        public async Task<ActionResult<List<Usuario>>> finnAll()
        {
            return await context.Usuario.ToListAsync();
        }

        // Cuando queremos obtener solo los habilitados
        [HttpGet("custom")]
        public async Task<ActionResult<List<Usuario>>> findAllCustom()
        {
            return await context.Usuario.Where(x => x.estadoUsuario == true).ToListAsync(); //Cambiar estado(traer true o false)
        }

        //Cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Usuario a)
        {
            context.Add(a);
            await context.SaveChangesAsync();
            return Ok();
        }

        //Cuando queremos buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Usuario>> findById(int id)
        {
            var usuario = await context.Usuario.FirstOrDefaultAsync(x => x.id_Usuario == id);
            return usuario;
        }


        //Cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Usuario a, int id)
        {
            if (a.id_Usuario != id)
            {
                return BadRequest("No se encuentra el codigo correspondiente");
            }

            context.Update(a);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Usuario.AnyAsync(x => x.id_Usuario == id);
            if (!existe)
            {
                return NotFound();
            }
            var usuario = await context.Usuario.FirstOrDefaultAsync(x => x.id_Usuario == id);
            usuario.estadoUsuario = false;
            context.Update(usuario);
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
