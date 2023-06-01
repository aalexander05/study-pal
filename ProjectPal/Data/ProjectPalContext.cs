using Microsoft.EntityFrameworkCore;

namespace ProjectPal.Data;

public class ProjectPalContext : DbContext
{

    public ProjectPalContext(DbContextOptions<ProjectPalContext> options) : base(options)
    {
    }

    public DbSet<Project> Projects { get; set; }
    public DbSet<RawMaterial> RawMaterials { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasData(
            new User()
            {
                UserId = 1,
                FullName = "AJ Alexander"
            }
        );

        modelBuilder.Entity<RawMaterial>().HasData(
            new RawMaterial()
            {
                RawMaterialId = 1,
                Name = "Dimensional Lumber - 2 X 4 X 8'",
                Cost = 13.5m,
            },
            new RawMaterial()
            {
                RawMaterialId = 2,
                Name = "Dimensional Lumber - 2 X 6 X 8'",
                Cost = 17.5m,
            },
            new RawMaterial()
            {
                RawMaterialId = 3,
                Name = "Dimensional Lumber - 4 X 4 X 8'",
                Cost = 15.5m,
            }
        );

    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=./Data/project-pal.db");
    }
}
