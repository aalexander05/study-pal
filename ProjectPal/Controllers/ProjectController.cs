using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectPal.Data;

namespace ProjectPal.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectController : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;
    private readonly ProjectPalContext _projectPalContext;

    public ProjectController(ILogger<WeatherForecastController> logger,
        ProjectPalContext projectPalContext)
    {
        _logger = logger;
        _projectPalContext = projectPalContext;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<RawMaterial>>> Get()
    {
        var results = await _projectPalContext.Projects.ToListAsync();
        return Ok(results);
    }

    [HttpPost]
    public async Task<ActionResult> Insert([FromBody] Project project)
    {
        if (project == null)
        {
            return BadRequest();
        }

        await _projectPalContext.Projects.AddAsync(project);
        return CreatedAtAction("Project", project);
    }
}