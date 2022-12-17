using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Empleado
    {
        [Key]
        public int id_empleado { get; set; }

        [Required]
        [StringLength(maximumLength: 8, ErrorMessage = "Se tiene que ingresar su DNI")]
        public string dni_empleado { get; set; }

        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su nombre")]
        public string nombre_empleado { get; set; }
        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su apellidos")]
        public string apellido_empleado { get; set; }
        [Required]
        [StringLength(maximumLength: 9, ErrorMessage = "Se tiene que ingresar su telefono")]
        public string telefono_empleado { get; set; }
        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su correo")]
        public string correo_empleado { get; set; }
        [Required]
        [StringLength(maximumLength: 10, ErrorMessage = "Se tiene que ingresar su genero")]
        public string genero_empleado { get; set; }
        [Required]
        [StringLength(maximumLength: 30, ErrorMessage = "Se tiene que ingresar su cargo")]
        public string cargo_empleado { get; set; }

        [Required]
        public int id_Usuario { get; set; }

        public Usuario usuario { get; set; }

        [Required]
        public bool estadoEmpleado { get; set; }

    }
}
