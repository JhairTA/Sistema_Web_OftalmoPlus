using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Aplicacion_Web2.Migrations
{
    public partial class Inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Paciente",
                columns: table => new
                {
                    idpaciente = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dnipaciente = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nombrepaciente = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellidospaciente = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    correopaciente = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    telefonopaciente = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: false),
                    generopaciente = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    fechanacimientopaciente = table.Column<DateTime>(type: "datetime2", nullable: false),
                    estadocivilpaciente = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    edadpaciente = table.Column<int>(type: "int", nullable: false),
                    estadoPaciente = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paciente", x => x.idpaciente);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    id_Usuario = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombreUsuario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    contraseñaUsuario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    estadoUsuario = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.id_Usuario);
                });

            migrationBuilder.CreateTable(
                name: "Historia_Clinica",
                columns: table => new
                {
                    id_historia_clinica = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idpaciente = table.Column<int>(type: "int", nullable: false),
                    pacienteidpaciente = table.Column<int>(type: "int", nullable: true),
                    enfermedad_personal = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    alergias = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    enfermedades_oculares = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    uso_medicamentos = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    operaciones = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    motivo_consulta = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    estadoHistoriaclinica = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Historia_Clinica", x => x.id_historia_clinica);
                    table.ForeignKey(
                        name: "FK_Historia_Clinica_Paciente_pacienteidpaciente",
                        column: x => x.pacienteidpaciente,
                        principalTable: "Paciente",
                        principalColumn: "idpaciente",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Empleado",
                columns: table => new
                {
                    id_empleado = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dni_empleado = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    nombre_empleado = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellido_empleado = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    telefono_empleado = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: false),
                    correo_empleado = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    genero_empleado = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    cargo_empleado = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    id_Usuario = table.Column<int>(type: "int", nullable: false),
                    usuarioid_Usuario = table.Column<int>(type: "int", nullable: true),
                    estadoEmpleado = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Empleado", x => x.id_empleado);
                    table.ForeignKey(
                        name: "FK_Empleado_Usuario_usuarioid_Usuario",
                        column: x => x.usuarioid_Usuario,
                        principalTable: "Usuario",
                        principalColumn: "id_Usuario",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Consulta_Medica",
                columns: table => new
                {
                    id_ConsultaMedica = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    motivoConsulta = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    id_historia_clinica = table.Column<int>(type: "int", nullable: false),
                    historiaclinicaid_historia_clinica = table.Column<int>(type: "int", nullable: true),
                    id_empleado = table.Column<int>(type: "int", nullable: false),
                    empleadoid_empleado = table.Column<int>(type: "int", nullable: true),
                    estadoConsultaMedica = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consulta_Medica", x => x.id_ConsultaMedica);
                    table.ForeignKey(
                        name: "FK_Consulta_Medica_Empleado_empleadoid_empleado",
                        column: x => x.empleadoid_empleado,
                        principalTable: "Empleado",
                        principalColumn: "id_empleado",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Consulta_Medica_Historia_Clinica_historiaclinicaid_historia_clinica",
                        column: x => x.historiaclinicaid_historia_clinica,
                        principalTable: "Historia_Clinica",
                        principalColumn: "id_historia_clinica",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Consulta_Medica_empleadoid_empleado",
                table: "Consulta_Medica",
                column: "empleadoid_empleado");

            migrationBuilder.CreateIndex(
                name: "IX_Consulta_Medica_historiaclinicaid_historia_clinica",
                table: "Consulta_Medica",
                column: "historiaclinicaid_historia_clinica");

            migrationBuilder.CreateIndex(
                name: "IX_Empleado_usuarioid_Usuario",
                table: "Empleado",
                column: "usuarioid_Usuario");

            migrationBuilder.CreateIndex(
                name: "IX_Historia_Clinica_pacienteidpaciente",
                table: "Historia_Clinica",
                column: "pacienteidpaciente");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Consulta_Medica");

            migrationBuilder.DropTable(
                name: "Empleado");

            migrationBuilder.DropTable(
                name: "Historia_Clinica");

            migrationBuilder.DropTable(
                name: "Usuario");

            migrationBuilder.DropTable(
                name: "Paciente");
        }
    }
}
