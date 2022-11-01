using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Consulta_Optometra
    {
        [Key]
        [StringLength(maximumLength: 5)]
        public string id_consulta_optometra { get; set; }

        public Optometra Optometra { get; set; }

        public Consulta_Medica Consulta_Medica { get; set; }

        public int Agudeza_Visual { get; set; }

        [Required]
        public int Medida_vista_computarizada { get; set; }

        [Required]
        public int Medida_vista_final { get; set; }

        [Required]
        public int Queratometria { get; set; }

        [Required]
        public string Observaciones { get; set; }

    }
}
