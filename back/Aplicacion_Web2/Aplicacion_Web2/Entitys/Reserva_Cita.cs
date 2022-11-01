using System;
using System.ComponentModel.DataAnnotations;

namespace Aplicacion_Web2.Entitys
{
    public class Reserva_Cita
    {
        [Key]
        [StringLength(maximumLength: 5)]
        public string id_Reserva { get; set; }

        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Se tiene que ingresar el motivo")]
        public string motivo { get; set; }

        [Required]
        public DateTime fechaReserva { get; set; }

        [Required]
        public DateTime horaReserva { get; set; }

        public Paciente paciente { get; set; }

        public Doctor doctor { get; set; }
    }
}
