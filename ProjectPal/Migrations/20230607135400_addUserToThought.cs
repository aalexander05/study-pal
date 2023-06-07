using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectPal.Migrations
{
    public partial class addUserToThought : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.AddColumn<string>(
                name: "UserCreatedId",
                table: "Thoughts",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Thoughts_UserCreatedId",
                table: "Thoughts",
                column: "UserCreatedId");

            migrationBuilder.AddForeignKey(
                name: "FK_Thoughts_AspNetUsers_UserCreatedId",
                table: "Thoughts",
                column: "UserCreatedId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Thoughts_AspNetUsers_UserCreatedId",
                table: "Thoughts");

            migrationBuilder.DropIndex(
                name: "IX_Thoughts_UserCreatedId",
                table: "Thoughts");

            migrationBuilder.DropColumn(
                name: "UserCreatedId",
                table: "Thoughts");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FullName = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "FullName" },
                values: new object[] { 1, "AJ Alexander" });
        }
    }
}
