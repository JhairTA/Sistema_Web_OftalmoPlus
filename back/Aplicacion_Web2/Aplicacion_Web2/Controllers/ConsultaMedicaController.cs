using Aplicacion_Web2.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aplicacion_Web2.Controllers
{
    [ApiController]
    [Route("Sistema_Web_OftalmoPlus/consultamedica")]
    public class ConsultaMedicaController: ControllerBase
    {
        private readonly ApplicationDBContext context;

        //creamos el metodo constructor
        public ConsultaMedicaController(ApplicationDBContext context)
        {
            this.context = context;
        }

        // Cuando queremos obtener informacion
        [HttpGet]
        public async Task<ActionResult<List<Consulta_Medica>>> findAll()
        {
            return await context.Consulta_Medica.Include(x => x.historiaclinica).ToListAsync();
        }


        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Consulta_Medica c)
        {
            // Verificando la existencia de la historia clinica y empleado
            var historiaexiste = await context.Historia_Clinica
                .AnyAsync(x => x.id_historia_clinica == c.id_historia_clinica);

            var empleadoexiste = await context.Empleado
                .AnyAsync(x => x.id_empleado == c.id_empleado);

            if (!historiaexiste)
            {
                return NotFound($"No existe la historia clinica con codigo: {c.id_historia_clinica}");
            }
            if (!empleadoexiste)
            {
                return NotFound($"No existe el empleado con codigo: {c.id_empleado}");
            }
            context.Add(c);
            await context.SaveChangesAsync();
            return Ok();
        }

        // Cuando queremos buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Consulta_Medica>> findById(int id)
        {
            var consulta = await context.Consulta_Medica.
                FirstOrDefaultAsync(x => x.id_ConsultaMedica == id);
            return consulta;
        }

        //Cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Consulta_Medica c, int id)
        {
            if (c.id_ConsultaMedica != id)
            {
                return BadRequest("No se encuentra el codigo correspondiente");
            }
            context.Update(c);
            await context.SaveChangesAsync();
            return Ok();
        }

        //Cuando queremos eliminar informacion
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Consulta_Medica.AnyAsync(x => x.id_ConsultaMedica == id);
            if (!existe)
            {
                return NotFound();
            }
            var consulta = await context.Consulta_Medica.FirstOrDefaultAsync(x => x.id_ConsultaMedica == id);
            consulta.estadoConsultaMedica = false;
            context.Update(consulta);
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
