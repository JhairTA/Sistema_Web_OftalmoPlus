using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Consulta_Medica
    {
        [Key]
        public int id_ConsultaMedica { get; set; }

        [Required]
        public string motivoConsulta { get; set; }

        [Required]
        public int id_historia_clinica { get; set; }

        public Historia_Clinica historiaclinica { get; set; }

        [Required]
        public int id_empleado { get; set; }

        public Empleado empleado { get; set; }

        [Required]
        public bool estadoConsultaMedica { get; set; }
    }
}
