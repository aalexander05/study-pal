using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectPal.Data;

namespace ProjectPal.Controllers;

[ApiController]
[Route("[controller]")]
public class ThoughtController : ControllerBase
{
    private readonly ProjectPalContext _projectPalContext;
    private readonly IMapper _mapper;

    public ThoughtController(ProjectPalContext projectPalContext,
        IMapper mapper)
	{
        _projectPalContext = projectPalContext;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Dtos.ThoughtForSave>>> GetAll()
    {
        var thoughts = await _projectPalContext.Thoughts
            .OrderByDescending(x => x.DateCreated)
            .ToListAsync();
        return Ok(thoughts);
    }

    [HttpGet("Recent")]
    public async Task<ActionResult<IEnumerable<Dtos.ThoughtForView>>> GetLastTen()
    {
        var thoughts = await _projectPalContext.Thoughts
            .OrderByDescending(x => x.DateCreated)
            .Take(10)
            .ToListAsync();

        IEnumerable<Dtos.ThoughtForView> response = thoughts.Select(x => _mapper.Map<Dtos.ThoughtForView>(x));

        return Ok(response);
    }

    [HttpPost]
    public async Task<ActionResult> SaveThought([FromBody] Dtos.ThoughtForSave thought)
    {
        if (thought == null)
        {
            return BadRequest();
        }

        Thought thoughtToSave = _mapper.Map<Thought>(thought);

        thoughtToSave.DateCreated = DateTime.UtcNow;

        _projectPalContext.Thoughts.Add(thoughtToSave);
        await _projectPalContext.SaveChangesAsync();

        return Ok();
    }
}
