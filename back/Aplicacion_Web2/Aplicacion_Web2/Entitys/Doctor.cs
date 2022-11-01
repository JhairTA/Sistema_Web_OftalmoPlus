using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Doctor
    {
        [Key]
        public int id_doctor { get; set; }
        [Required]
        [StringLength(maximumLength: 8, ErrorMessage = "Se tiene que ingresar su DNI")]
        public string dni_doctor { get; set; }
        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su nombre")]
        public string nombre_doctor { get; set; }
        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su apellidos")]
        public string apellido_doctor { get; set; }
        [Required]
        [StringLength(maximumLength: 9, ErrorMessage = "Se tiene que ingresar su telefono")]
        public string telefono_doctor { get; set; }
        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su correo")]
        public string correo_doctor { get; set; }
        [Required]
        [StringLength(maximumLength: 10, ErrorMessage = "Se tiene que ingresar su genero")]
        public string genero_doctor { get; set; }

        [Required]
        public int id_Usuario { get; set; }

        public Usuario usuario { get; set; }

    }
}
