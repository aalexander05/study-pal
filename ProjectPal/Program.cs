using ProjectPal.Data;
using System.Diagnostics;

var allowedOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ProjectPalContext>(options =>
{
    options.LogTo(message => Debug.WriteLine(message), Microsoft.Extensions.Logging.LogLevel.Information)
                .EnableSensitiveDataLogging();
});

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowedOrigins,
                      policy =>
                      {
                          policy.AllowAnyHeader();
                          policy.WithOrigins("http://localhost:4200", "https://ashy-stone-0c717d410.3.azurestaticapps.net");
                      });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

//if (app.Environment.IsDevelopment())
//{
//}

app.UseHttpsRedirection();

app.UseCors(allowedOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
