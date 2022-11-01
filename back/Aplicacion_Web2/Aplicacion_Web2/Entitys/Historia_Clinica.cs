using System;
using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Historia_Clinica
    {
        [Key]
        public int id_historia_clinica { get; set; }

        [Required]
        [StringLength(maximumLength: 8, ErrorMessage = "Se tiene que ingresar su dni")]
        public string dnipaciente { get; set; }
        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su nombre")]
        public string nombrepaciente { get; set; }
        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su apellido")]
        public string apellidospaciente { get; set; }
        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su correo")]
        public string correopaciente { get; set; }
        [Required]
        [StringLength(maximumLength: 9, ErrorMessage = "Se tiene que ingresar su telefono")]
        public string telefonopaciente { get; set; }
        [Required]
        [StringLength(maximumLength: 10, ErrorMessage = "Se tiene que ingresar su genero")]
        public string generopaciente { get; set; }

        [Required(ErrorMessage = "{0} es requerido")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Fecha de Nacimiento")]
        public DateTime fechanacimientopaciente { get; set; }

        [Required]
        [StringLength(maximumLength: 15, ErrorMessage = "Se tiene que ingresar su estado civil")]
        public string estadocivilpaciente { get; set; }
        [Required(ErrorMessage = "Se tiene que ingresar su edad")]
        [Range(0, 120)]
        public int edadpaciente { get; set; }

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
        public bool estadohistoriaclinica { get; set; }

    }
}
