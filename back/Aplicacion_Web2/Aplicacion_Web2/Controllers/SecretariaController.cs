using Aplicacion_Web2.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aplicacion_Web2.Controllers
{
    [ApiController]
    [Route("Sistema_Web_OftalmoPlus/secretaria")]
    public class SecretariaController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        //Creamos el metodo constructor
        public SecretariaController(ApplicationDBContext context)
        {
            this.context = context;
        }

        //Cuando queremos obtener informacion
        [HttpGet]
        public async Task<ActionResult<List<Secretaria>>> finnAll()
        {
            return await context.Secretaria.Include(x=>x.usuario).ToListAsync();
        }

        //Cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Secretaria s)
        {
            // Verificando la existencia del usuario
            var usuarioexiste = await context.Usuario
                .AnyAsync(x=> x.id_Usuario == s.id_Usuario);

            if (!usuarioexiste)
            {
                return NotFound($"No existe el autor con codigo: {s.id_Usuario}");
            }
            context.Add(s);
            await context.SaveChangesAsync();
            return Ok();
        }

        //Cuando queremos buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Secretaria>> findById(int id)
        {
            var secretaria = await context.Secretaria.FirstOrDefaultAsync(x => x.id_Secretaria == id);
            return secretaria;
        }

        //Cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Secretaria s, int id)
        {
            if (s.id_Secretaria != id)
            {
                return BadRequest("No se encuentra el codigo correspondiente");
            }

            context.Update(s);
            await context.SaveChangesAsync();
            return Ok();
        }

        //Cuando queremos eliminar informacion
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            //var existe = await context.Secretaria.FirstOrDefaultAsync(x => x.id_Secretaria == id);

            context.Remove(new Secretaria() { id_Secretaria = id });
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
