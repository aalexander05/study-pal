using Microsoft.AspNetCore.Mvc;
using ProjectPal.Data;

namespace ProjectPal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RawMaterialController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly ProjectPalContext _projectPalContext;

        public RawMaterialController(ILogger<WeatherForecastController> logger,
            ProjectPalContext projectPalContext)
        {
            _logger = logger;
            _projectPalContext = projectPalContext;
        }

        [HttpGet]
        public IEnumerable<RawMaterial> Get()
        {
            var results = _projectPalContext.RawMaterials.ToList();
            return results;
        }
    }
}