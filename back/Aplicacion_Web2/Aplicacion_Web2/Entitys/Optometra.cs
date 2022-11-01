using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Optometra
    {
        [Key]
        [StringLength(maximumLength: 5)]
        public string id_Optometra { get; set; }
        [Required]
        [StringLength(maximumLength: 8, ErrorMessage = "Se tiene que ingresar su dni")]
        public string dniOptometra { get; set; }

        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su nombre")]
        public string nombreOptometra { get; set; }

        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar sus apellidos")]
        public string apellidosOptometra { get; set; }

        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su correo")]
        public string correoOptometra { get; set; }

        [Required]
        [StringLength(maximumLength: 9, ErrorMessage = "Se tiene que ingresar su telefono")]
        public string telefonoOptometra { get; set; }

        [Required]
        [StringLength(maximumLength: 10, ErrorMessage = "Se tiene que ingresar su genero")]
        public string generoOptometra { get; set; }

        public Usuario usuario { get; set; }
    }
}
