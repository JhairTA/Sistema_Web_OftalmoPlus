using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Secretaria
    {
        [Key]
        public int id_Secretaria { get; set; }
        [Required]
        [StringLength(maximumLength: 8, ErrorMessage = "Se tiene que ingresar su dni")]
        public string dniSecretaria{ get; set; }

        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su nombre")]
        public string nombreSecretaria { get; set; }

        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar sus apellidos")]
        public string apellidosSecretaria { get; set; }

        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar su correo")]
        public string correoSecretaria { get; set; }

        [Required]
        [StringLength(maximumLength: 9, ErrorMessage = "Se tiene que ingresar su telefono")]
        public string telefonoSecretaria { get; set; }

        [Required]
        [StringLength(maximumLength: 10, ErrorMessage = "Se tiene que ingresar su genero")]
        public string generoSecretaria { get; set; }

        [Required]
        public int id_Usuario { get; set; }

        public Usuario usuario { get; set; }
    }
}
