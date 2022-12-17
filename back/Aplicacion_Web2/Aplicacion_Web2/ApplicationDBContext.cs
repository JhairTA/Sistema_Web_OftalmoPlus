using Aplicacion_Web2.Entitys;
using Microsoft.EntityFrameworkCore;

namespace Aplicacion_Web2
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Usuario> Usuario {get; set;}
        public DbSet<Consulta_Medica> Consulta_Medica {get; set;}
        public DbSet<Historia_Clinica> Historia_Clinica {get; set;}
        public DbSet<Paciente> Paciente {get; set;}
        public DbSet<Empleado> Empleado { get; set; }
    }
}
