using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Consulta_Medica
    {
        [Key]
        [StringLength(maximumLength: 5)]
        public string id_ConsultaMedica { get; set; }

        [Required]
        public string motivoConsulta { get; set; }

        public Historia_Clinica historiaclinica { get; set; }
    }
}
