using Microsoft.EntityFrameworkCore;
using System.IO;

namespace ProjectPal.Data;

public class ProjectPalContext : DbContext
{

    public string DbPath { get; }


    public ProjectPalContext(DbContextOptions<ProjectPalContext> options) : base(options)
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        DbPath = System.IO.Path.Join(path, "project-pal.db");
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
        // SQL SERVER

        //if (!optionsBuilder.IsConfigured)
        //{

        //    optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=ProjectPal");
        //}


        // SQLITE
        optionsBuilder.UseSqlite($"Data Source={DbPath}");

    }
}
