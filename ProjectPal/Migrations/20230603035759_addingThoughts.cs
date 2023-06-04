using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectPal.Migrations
{
    public partial class addingThoughts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Users_CreatedByUserId",
                table: "Projects");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Users_ModifiedByUserId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Projects_CreatedByUserId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Projects_ModifiedByUserId",
                table: "Projects");

            migrationBuilder.CreateTable(
                name: "Thoughts",
                columns: table => new
                {
                    ThoughtId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Text = table.Column<string>(type: "TEXT", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Thoughts", x => x.ThoughtId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Thoughts");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_CreatedByUserId",
                table: "Projects",
                column: "CreatedByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_ModifiedByUserId",
                table: "Projects",
                column: "ModifiedByUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Users_CreatedByUserId",
                table: "Projects",
                column: "CreatedByUserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Users_ModifiedByUserId",
                table: "Projects",
                column: "ModifiedByUserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
