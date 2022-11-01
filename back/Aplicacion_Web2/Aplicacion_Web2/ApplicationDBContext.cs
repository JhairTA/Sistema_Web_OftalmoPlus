using Aplicacion_Web2.Entitys;
using Microsoft.EntityFrameworkCore;

namespace Aplicacion_Web2
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Paciente> Paciente {get; set;}
        public DbSet<Doctor> Doctor {get; set;}
        public DbSet<Optometra> Optometra {get; set;}
        public DbSet<Usuario> Usuario {get; set;}
        public DbSet<Secretaria> Secretaria {get; set;}
        public DbSet<Reserva_Cita> Reserva_Cita {get; set;}
        public DbSet<Consulta_Doctor> Consulta_Doctor {get; set;}
        public DbSet<Consulta_Medica> Consulta_Medica {get; set;}
        public DbSet<Historia_Clinica> Historia_Clinica {get; set;}
        public DbSet<Receta> Receta {get; set;}
        public DbSet<Consulta_Optometra> Consulta_Optometra {get; set;}

    }
}
