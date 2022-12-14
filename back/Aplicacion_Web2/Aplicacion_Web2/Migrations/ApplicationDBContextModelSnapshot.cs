// <auto-generated />
using System;
using Aplicacion_Web2;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Aplicacion_Web2.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    partial class ApplicationDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Aplicacion_Web2.Entitys.Consulta_Medica", b =>
                {
                    b.Property<int>("id_ConsultaMedica")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("empleadoid_empleado")
                        .HasColumnType("int");

                    b.Property<bool>("estadoConsultaMedica")
                        .HasColumnType("bit");

                    b.Property<int?>("historiaclinicaid_historia_clinica")
                        .HasColumnType("int");

                    b.Property<int>("id_empleado")
                        .HasColumnType("int");

                    b.Property<int>("id_historia_clinica")
                        .HasColumnType("int");

                    b.Property<string>("motivoConsulta")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id_ConsultaMedica");

                    b.HasIndex("empleadoid_empleado");

                    b.HasIndex("historiaclinicaid_historia_clinica");

                    b.ToTable("Consulta_Medica");
                });

            modelBuilder.Entity("Aplicacion_Web2.Entitys.Empleado", b =>
                {
                    b.Property<int>("id_empleado")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("apellido_empleado")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("cargo_empleado")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("correo_empleado")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("dni_empleado")
                        .IsRequired()
                        .HasMaxLength(8)
                        .HasColumnType("nvarchar(8)");

                    b.Property<bool>("estadoEmpleado")
                        .HasColumnType("bit");

                    b.Property<string>("genero_empleado")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<int>("id_Usuario")
                        .HasColumnType("int");

                    b.Property<string>("nombre_empleado")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("telefono_empleado")
                        .IsRequired()
                        .HasMaxLength(9)
                        .HasColumnType("nvarchar(9)");

                    b.Property<int?>("usuarioid_Usuario")
                        .HasColumnType("int");

                    b.HasKey("id_empleado");

                    b.HasIndex("usuarioid_Usuario");

                    b.ToTable("Empleado");
                });

            modelBuilder.Entity("Aplicacion_Web2.Entitys.Historia_Clinica", b =>
                {
                    b.Property<int>("id_historia_clinica")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("alergias")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("enfermedad_personal")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("enfermedades_oculares")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<bool>("estadoHistoriaclinica")
                        .HasColumnType("bit");

                    b.Property<int>("idpaciente")
                        .HasColumnType("int");

                    b.Property<string>("motivo_consulta")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("operaciones")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<int?>("pacienteidpaciente")
                        .HasColumnType("int");

                    b.Property<string>("uso_medicamentos")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("id_historia_clinica");

                    b.HasIndex("pacienteidpaciente");

                    b.ToTable("Historia_Clinica");
                });

            modelBuilder.Entity("Aplicacion_Web2.Entitys.Paciente", b =>
                {
                    b.Property<int>("idpaciente")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("apellidospaciente")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("correopaciente")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("dnipaciente")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("edadpaciente")
                        .HasColumnType("int");

                    b.Property<bool>("estadoPaciente")
                        .HasColumnType("bit");

                    b.Property<string>("estadocivilpaciente")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.Property<DateTime>("fechanacimientopaciente")
                        .HasColumnType("datetime2");

                    b.Property<string>("generopaciente")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("nombrepaciente")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("telefonopaciente")
                        .IsRequired()
                        .HasMaxLength(9)
                        .HasColumnType("nvarchar(9)");

                    b.HasKey("idpaciente");

                    b.ToTable("Paciente");
                });

            modelBuilder.Entity("Aplicacion_Web2.Entitys.Usuario", b =>
                {
                    b.Property<int>("id_Usuario")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("contraseñaUsuario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("estadoUsuario")
                        .HasColumnType("bit");

                    b.Property<string>("nombreUsuario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id_Usuario");

                    b.ToTable("Usuario");
                });

            modelBuilder.Entity("Aplicacion_Web2.Entitys.Consulta_Medica", b =>
                {
                    b.HasOne("Aplicacion_Web2.Entitys.Empleado", "empleado")
                        .WithMany()
                        .HasForeignKey("empleadoid_empleado");

                    b.HasOne("Aplicacion_Web2.Entitys.Historia_Clinica", "historiaclinica")
                        .WithMany()
                        .HasForeignKey("historiaclinicaid_historia_clinica");

                    b.Navigation("empleado");

                    b.Navigation("historiaclinica");
                });

            modelBuilder.Entity("Aplicacion_Web2.Entitys.Empleado", b =>
                {
                    b.HasOne("Aplicacion_Web2.Entitys.Usuario", "usuario")
                        .WithMany()
                        .HasForeignKey("usuarioid_Usuario");

                    b.Navigation("usuario");
                });

            modelBuilder.Entity("Aplicacion_Web2.Entitys.Historia_Clinica", b =>
                {
                    b.HasOne("Aplicacion_Web2.Entitys.Paciente", "paciente")
                        .WithMany()
                        .HasForeignKey("pacienteidpaciente");

                    b.Navigation("paciente");
                });
#pragma warning restore 612, 618
        }
    }
}
