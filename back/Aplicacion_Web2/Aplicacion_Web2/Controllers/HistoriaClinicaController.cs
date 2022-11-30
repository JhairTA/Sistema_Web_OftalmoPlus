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
    [Route("Sistema_Web_OftalmoPlus/historiaclinica")]

    //: ControllerBase es una herencia para que sea un controlador
    public class HistoriaClinicaController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        //creamos el metodo constructor
        public HistoriaClinicaController(ApplicationDBContext context)
        {
            this.context = context;
        }

        // Cuando queremos obtener informacion
        [HttpGet]
        public async Task<ActionResult<List<Historia_Clinica>>> findAll()
        {
            return await context.Historia_Clinica.Include(x => x.paciente).ToListAsync();
        }



        // Cuando queremos obtener solo los habilitados
        [HttpGet("custom")]
        public async Task<ActionResult<List<Historia_Clinica>>> findAllCustom()
        {
            return await context.Historia_Clinica.Where(x => x.estadoHistoriaclinica == true).ToListAsync(); //Cambiar estado(traer true o false)
        }



        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Historia_Clinica hc)
        {
            // Verificando la existencia del usuario
            var pacienteexiste = await context.Paciente
                .AnyAsync(x => x.idpaciente == hc.idpaciente);

            if (!pacienteexiste)
            {
                return NotFound($"No existe el paciente con codigo: {hc.idpaciente}");
            }

            context.Add(hc);
            await context.SaveChangesAsync();
            return Ok();
        }

        // Cuando queremos buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Historia_Clinica>> findById(int id)
        {
            var historiaclinica = await context.Historia_Clinica.
                FirstOrDefaultAsync(x => x.id_historia_clinica == id);
            return historiaclinica;
        }

        //Cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Historia_Clinica hc, int id)
        {
            if (hc.id_historia_clinica != id)
            {
                return BadRequest("No se encuentra el codigo correspondiente");
            }
            context.Update(hc);
            await context.SaveChangesAsync();
            return Ok();
        }

        //Cuando queremos eliminar informacion
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Historia_Clinica.AnyAsync(x => x.id_historia_clinica == id);
            if (!existe)
            {
                return NotFound();
            }
            var historia = await context.Historia_Clinica.FirstOrDefaultAsync(x => x.id_historia_clinica == id);
            historia.estadoHistoriaclinica = false;
            context.Update(historia);
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
