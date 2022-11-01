using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Aplicacion_Web2.Migrations
{
    public partial class Inicial1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Historia_Clinica",
                columns: table => new
                {
                    id_historia_clinica = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dnipaciente = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    nombrepaciente = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellidospaciente = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    correopaciente = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    telefonopaciente = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: false),
                    generopaciente = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    fechanacimientopaciente = table.Column<DateTime>(type: "datetime2", nullable: false),
                    estadocivilpaciente = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    edadpaciente = table.Column<int>(type: "int", nullable: false),
                    enfermedad_personal = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    alergias = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    enfermedades_oculares = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    uso_medicamentos = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    operaciones = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    motivo_consulta = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    estadohistoriaclinica = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Historia_Clinica", x => x.id_historia_clinica);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    id_Usuario = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombreUsuario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    contraseñaUsuario = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.id_Usuario);
                });

            migrationBuilder.CreateTable(
                name: "Consulta_Medica",
                columns: table => new
                {
                    id_ConsultaMedica = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    motivoConsulta = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    historiaclinicaid_historia_clinica = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consulta_Medica", x => x.id_ConsultaMedica);
                    table.ForeignKey(
                        name: "FK_Consulta_Medica_Historia_Clinica_historiaclinicaid_historia_clinica",
                        column: x => x.historiaclinicaid_historia_clinica,
                        principalTable: "Historia_Clinica",
                        principalColumn: "id_historia_clinica",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Paciente",
                columns: table => new
                {
                    id_paciente = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    dnipaciente = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    nombrepaciente = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellidospaciente = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    correopaciente = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    telefonopaciente = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: false),
                    generopaciente = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    fechanacimientopaciente = table.Column<DateTime>(type: "datetime2", nullable: false),
                    estadocivilpaciente = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    edadpaciente = table.Column<int>(type: "int", nullable: false),
                    Historia_Clinicaid_historia_clinica = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paciente", x => x.id_paciente);
                    table.ForeignKey(
                        name: "FK_Paciente_Historia_Clinica_Historia_Clinicaid_historia_clinica",
                        column: x => x.Historia_Clinicaid_historia_clinica,
                        principalTable: "Historia_Clinica",
                        principalColumn: "id_historia_clinica",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Doctor",
                columns: table => new
                {
                    id_doctor = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dni_doctor = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    nombre_doctor = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellido_doctor = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    telefono_doctor = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: false),
                    correo_doctor = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    genero_doctor = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    id_Usuario = table.Column<int>(type: "int", nullable: false),
                    usuarioid_Usuario = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctor", x => x.id_doctor);
                    table.ForeignKey(
                        name: "FK_Doctor_Usuario_usuarioid_Usuario",
                        column: x => x.usuarioid_Usuario,
                        principalTable: "Usuario",
                        principalColumn: "id_Usuario",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Optometra",
                columns: table => new
                {
                    id_Optometra = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    dniOptometra = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    nombreOptometra = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellidosOptometra = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    correoOptometra = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    telefonoOptometra = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: false),
                    generoOptometra = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    usuarioid_Usuario = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Optometra", x => x.id_Optometra);
                    table.ForeignKey(
                        name: "FK_Optometra_Usuario_usuarioid_Usuario",
                        column: x => x.usuarioid_Usuario,
                        principalTable: "Usuario",
                        principalColumn: "id_Usuario",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Secretaria",
                columns: table => new
                {
                    id_Secretaria = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dniSecretaria = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    nombreSecretaria = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellidosSecretaria = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    correoSecretaria = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    telefonoSecretaria = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: false),
                    generoSecretaria = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    id_Usuario = table.Column<int>(type: "int", nullable: false),
                    usuarioid_Usuario = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Secretaria", x => x.id_Secretaria);
                    table.ForeignKey(
                        name: "FK_Secretaria_Usuario_usuarioid_Usuario",
                        column: x => x.usuarioid_Usuario,
                        principalTable: "Usuario",
                        principalColumn: "id_Usuario",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Consulta_Doctor",
                columns: table => new
                {
                    id_ConsultaDoctor = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    diagnosticoConsultaDoctor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fondoOjo = table.Column<int>(type: "int", nullable: false),
                    presionOcular = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    observaciones = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    doctorid_doctor = table.Column<int>(type: "int", nullable: true),
                    consultamedicaid_ConsultaMedica = table.Column<string>(type: "nvarchar(5)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consulta_Doctor", x => x.id_ConsultaDoctor);
                    table.ForeignKey(
                        name: "FK_Consulta_Doctor_Consulta_Medica_consultamedicaid_ConsultaMedica",
                        column: x => x.consultamedicaid_ConsultaMedica,
                        principalTable: "Consulta_Medica",
                        principalColumn: "id_ConsultaMedica",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Consulta_Doctor_Doctor_doctorid_doctor",
                        column: x => x.doctorid_doctor,
                        principalTable: "Doctor",
                        principalColumn: "id_doctor",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Reserva_Cita",
                columns: table => new
                {
                    id_Reserva = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    motivo = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    fechaReserva = table.Column<DateTime>(type: "datetime2", nullable: false),
                    horaReserva = table.Column<DateTime>(type: "datetime2", nullable: false),
                    pacienteid_paciente = table.Column<string>(type: "nvarchar(5)", nullable: true),
                    doctorid_doctor = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reserva_Cita", x => x.id_Reserva);
                    table.ForeignKey(
                        name: "FK_Reserva_Cita_Doctor_doctorid_doctor",
                        column: x => x.doctorid_doctor,
                        principalTable: "Doctor",
                        principalColumn: "id_doctor",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Reserva_Cita_Paciente_pacienteid_paciente",
                        column: x => x.pacienteid_paciente,
                        principalTable: "Paciente",
                        principalColumn: "id_paciente",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Consulta_Optometra",
                columns: table => new
                {
                    id_consulta_optometra = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    Optometraid_Optometra = table.Column<string>(type: "nvarchar(5)", nullable: true),
                    Consulta_Medicaid_ConsultaMedica = table.Column<string>(type: "nvarchar(5)", nullable: true),
                    Agudeza_Visual = table.Column<int>(type: "int", nullable: false),
                    Medida_vista_computarizada = table.Column<int>(type: "int", nullable: false),
                    Medida_vista_final = table.Column<int>(type: "int", nullable: false),
                    Queratometria = table.Column<int>(type: "int", nullable: false),
                    Observaciones = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consulta_Optometra", x => x.id_consulta_optometra);
                    table.ForeignKey(
                        name: "FK_Consulta_Optometra_Consulta_Medica_Consulta_Medicaid_ConsultaMedica",
                        column: x => x.Consulta_Medicaid_ConsultaMedica,
                        principalTable: "Consulta_Medica",
                        principalColumn: "id_ConsultaMedica",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Consulta_Optometra_Optometra_Optometraid_Optometra",
                        column: x => x.Optometraid_Optometra,
                        principalTable: "Optometra",
                        principalColumn: "id_Optometra",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Receta",
                columns: table => new
                {
                    id_Receta = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    cantidad = table.Column<int>(type: "int", nullable: false),
                    indicacionesReceta = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fechaReceta = table.Column<DateTime>(type: "datetime2", nullable: false),
                    consultaDoctorid_ConsultaDoctor = table.Column<string>(type: "nvarchar(5)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Receta", x => x.id_Receta);
                    table.ForeignKey(
                        name: "FK_Receta_Consulta_Doctor_consultaDoctorid_ConsultaDoctor",
                        column: x => x.consultaDoctorid_ConsultaDoctor,
                        principalTable: "Consulta_Doctor",
                        principalColumn: "id_ConsultaDoctor",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Consulta_Doctor_consultamedicaid_ConsultaMedica",
                table: "Consulta_Doctor",
                column: "consultamedicaid_ConsultaMedica");

            migrationBuilder.CreateIndex(
                name: "IX_Consulta_Doctor_doctorid_doctor",
                table: "Consulta_Doctor",
                column: "doctorid_doctor");

            migrationBuilder.CreateIndex(
                name: "IX_Consulta_Medica_historiaclinicaid_historia_clinica",
                table: "Consulta_Medica",
                column: "historiaclinicaid_historia_clinica");

            migrationBuilder.CreateIndex(
                name: "IX_Consulta_Optometra_Consulta_Medicaid_ConsultaMedica",
                table: "Consulta_Optometra",
                column: "Consulta_Medicaid_ConsultaMedica");

            migrationBuilder.CreateIndex(
                name: "IX_Consulta_Optometra_Optometraid_Optometra",
                table: "Consulta_Optometra",
                column: "Optometraid_Optometra");

            migrationBuilder.CreateIndex(
                name: "IX_Doctor_usuarioid_Usuario",
                table: "Doctor",
                column: "usuarioid_Usuario");

            migrationBuilder.CreateIndex(
                name: "IX_Optometra_usuarioid_Usuario",
                table: "Optometra",
                column: "usuarioid_Usuario");

            migrationBuilder.CreateIndex(
                name: "IX_Paciente_Historia_Clinicaid_historia_clinica",
                table: "Paciente",
                column: "Historia_Clinicaid_historia_clinica");

            migrationBuilder.CreateIndex(
                name: "IX_Receta_consultaDoctorid_ConsultaDoctor",
                table: "Receta",
                column: "consultaDoctorid_ConsultaDoctor");

            migrationBuilder.CreateIndex(
                name: "IX_Reserva_Cita_doctorid_doctor",
                table: "Reserva_Cita",
                column: "doctorid_doctor");

            migrationBuilder.CreateIndex(
                name: "IX_Reserva_Cita_pacienteid_paciente",
                table: "Reserva_Cita",
                column: "pacienteid_paciente");

            migrationBuilder.CreateIndex(
                name: "IX_Secretaria_usuarioid_Usuario",
                table: "Secretaria",
                column: "usuarioid_Usuario");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Consulta_Optometra");

            migrationBuilder.DropTable(
                name: "Receta");

            migrationBuilder.DropTable(
                name: "Reserva_Cita");

            migrationBuilder.DropTable(
                name: "Secretaria");

            migrationBuilder.DropTable(
                name: "Optometra");

            migrationBuilder.DropTable(
                name: "Consulta_Doctor");

            migrationBuilder.DropTable(
                name: "Paciente");

            migrationBuilder.DropTable(
                name: "Consulta_Medica");

            migrationBuilder.DropTable(
                name: "Doctor");

            migrationBuilder.DropTable(
                name: "Historia_Clinica");

            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
