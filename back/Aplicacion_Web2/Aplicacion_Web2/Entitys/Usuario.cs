using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Usuario
    {
        [Key]
        public int id_Usuario { get; set; }

        [Required]
        public string nombreUsuario { get; set; }

        [Required]
        public string contraseñaUsuario { get; set; }
    }
}
