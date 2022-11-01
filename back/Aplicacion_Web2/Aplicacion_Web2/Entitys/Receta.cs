using System;
using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Receta
    {
        [Key]
        [StringLength(maximumLength: 5)]
        public string id_Receta { get; set; }

        [Required]
        public int cantidad { get; set; }

        [Required]
        public string indicacionesReceta { get; set; }

        [Required]
        public DateTime fechaReceta { get; set; }

        public Consulta_Doctor consultaDoctor { get; set; }
    }
}
