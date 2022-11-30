using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Historia_Clinica
    {
        [Key]
        public int id_historia_clinica { get; set; }

        [Required]
        public int idpaciente { get; set; }

        public Paciente paciente { get; set; }

        [Required]
        [StringLength(maximumLength: 30)]
        public string enfermedad_personal { get; set; }

        [Required]
        [StringLength(maximumLength: 30)]
        public string alergias { get; set; }

        [Required]
        [StringLength(maximumLength: 30)]
        public string enfermedades_oculares { get; set; }

        [Required]
        [StringLength(maximumLength: 30)]
        public string uso_medicamentos { get; set; }

        [Required]
        [StringLength(maximumLength: 30)]
        public string operaciones { get; set; }

        [Required]
        [StringLength(maximumLength: 30)]
        public string motivo_consulta { get; set; }


        [Required]
        public bool estadoHistoriaclinica { get; set; }

    }
}
