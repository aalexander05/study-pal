using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectPal.Migrations
{
    public partial class removingSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "RawMaterials",
                keyColumn: "RawMaterialId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "RawMaterials",
                keyColumn: "RawMaterialId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "RawMaterials",
                keyColumn: "RawMaterialId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "RawMaterials",
                columns: new[] { "RawMaterialId", "Cost", "Name", "ProjectId" },
                values: new object[] { 1, 13.5m, "Dimensional Lumber - 2 X 4 X 8'", null });

            migrationBuilder.InsertData(
                table: "RawMaterials",
                columns: new[] { "RawMaterialId", "Cost", "Name", "ProjectId" },
                values: new object[] { 2, 17.5m, "Dimensional Lumber - 2 X 6 X 8'", null });

            migrationBuilder.InsertData(
                table: "RawMaterials",
                columns: new[] { "RawMaterialId", "Cost", "Name", "ProjectId" },
                values: new object[] { 3, 15.5m, "Dimensional Lumber - 4 X 4 X 8'", null });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "FullName" },
                values: new object[] { 1, "AJ Alexander" });
        }
    }
}
