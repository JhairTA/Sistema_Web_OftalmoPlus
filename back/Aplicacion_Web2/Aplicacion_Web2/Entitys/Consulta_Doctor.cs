using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Consulta_Doctor
    {
        [Key]
        [StringLength(maximumLength: 5)]
        public string id_ConsultaDoctor { get; set; }

        [Required]
        public string diagnosticoConsultaDoctor { get; set; }

        [Required]
        public int fondoOjo { get; set; }

        [Required]
        public string presionOcular { get; set; }

        [Required]
        public string observaciones { get; set; }

        public Doctor doctor { get; set; }

        public Consulta_Medica consultamedica { get; set; }
    }
}
