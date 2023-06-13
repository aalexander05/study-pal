using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectPal.Migrations
{
    public partial class addingStudySession : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "StudySessions",
                columns: table => new
                {
                    StudySessionId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Topic = table.Column<string>(type: "TEXT", nullable: false),
                    MinutesStudied = table.Column<int>(type: "INTEGER", nullable: false),
                    Notes = table.Column<string>(type: "TEXT", nullable: false),
                    DateStudied = table.Column<long>(type: "INTEGER", nullable: false),
                    UserCreatedId = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudySessions", x => x.StudySessionId);
                    table.ForeignKey(
                        name: "FK_StudySessions_AspNetUsers_UserCreatedId",
                        column: x => x.UserCreatedId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "StudySessionLink",
                columns: table => new
                {
                    StudySessionLinkId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Href = table.Column<string>(type: "TEXT", nullable: false),
                    DateCreated = table.Column<long>(type: "INTEGER", nullable: false),
                    StudySessionId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudySessionLink", x => x.StudySessionLinkId);
                    table.ForeignKey(
                        name: "FK_StudySessionLink_StudySessions_StudySessionId",
                        column: x => x.StudySessionId,
                        principalTable: "StudySessions",
                        principalColumn: "StudySessionId");
                });

            migrationBuilder.CreateTable(
                name: "StudySessionTag",
                columns: table => new
                {
                    StudySessionTagId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TagText = table.Column<string>(type: "TEXT", nullable: false),
                    DateCreated = table.Column<long>(type: "INTEGER", nullable: false),
                    StudySessionId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudySessionTag", x => x.StudySessionTagId);
                    table.ForeignKey(
                        name: "FK_StudySessionTag_StudySessions_StudySessionId",
                        column: x => x.StudySessionId,
                        principalTable: "StudySessions",
                        principalColumn: "StudySessionId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_StudySessionLink_StudySessionId",
                table: "StudySessionLink",
                column: "StudySessionId");

            migrationBuilder.CreateIndex(
                name: "IX_StudySessions_UserCreatedId",
                table: "StudySessions",
                column: "UserCreatedId");

            migrationBuilder.CreateIndex(
                name: "IX_StudySessionTag_StudySessionId",
                table: "StudySessionTag",
                column: "StudySessionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StudySessionLink");

            migrationBuilder.DropTable(
                name: "StudySessionTag");

            migrationBuilder.DropTable(
                name: "StudySessions");
        }
    }
}
