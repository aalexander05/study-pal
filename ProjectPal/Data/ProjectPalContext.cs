using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ProjectPal.Data;

public class ProjectPalContext : DbContext
{

    public ProjectPalContext(DbContextOptions<ProjectPalContext> options) : base(options)
    {
    }

    public DbSet<Project> Projects { get; set; }
    public DbSet<RawMaterial> RawMaterials { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Thought> Thoughts { get; set; }

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


        base.OnModelCreating(modelBuilder);

        if (Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite")
        {
            // SQLite does not have proper support for DateTimeOffset via Entity Framework Core, see the limitations
            // here: https://docs.microsoft.com/en-us/ef/core/providers/sqlite/limitations#query-limitations
            // To work around this, when the Sqlite database provider is used, all model properties of type DateTimeOffset
            // use the DateTimeOffsetToBinaryConverter
            // Based on: https://github.com/aspnet/EntityFrameworkCore/issues/10784#issuecomment-415769754
            // This only supports millisecond precision, but should be sufficient for most use cases.
            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                var properties = entityType.ClrType.GetProperties().Where(p => p.PropertyType == typeof(DateTimeOffset)
                                                                            || p.PropertyType == typeof(DateTimeOffset?));
                foreach (var property in properties)
                {
                    modelBuilder
                        .Entity(entityType.Name)
                        .Property(property.Name)
                        .HasConversion(new DateTimeOffsetToBinaryConverter());
                }
            }
        }


    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=./Data/project-pal.db");
    }
}
