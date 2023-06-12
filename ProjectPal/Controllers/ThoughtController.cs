using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ProjectPal.Commands;
using ProjectPal.Data;
using ProjectPal.Queries;

namespace ProjectPal.Controllers;

[ApiController]
[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
[Route("api/[controller]")]
public class ThoughtController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IThoughtQueries _thoughtQueries;
    private readonly IThoughtCommands _thoughtCommands;

    public ThoughtController(
        IMapper mapper,
        UserManager<ApplicationUser> userManager,
        IThoughtQueries thoughtQueries,
        IThoughtCommands thoughtCommands)
	{
        _mapper = mapper;
        _userManager = userManager;
        _thoughtQueries = thoughtQueries;
        _thoughtCommands = thoughtCommands;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Dtos.ThoughtForView>>> GetAll()
    {
        string userName = User?.Identity?.Name ?? throw new System.Exception("No user found");
        ApplicationUser user = await _userManager.FindByNameAsync(userName);

        IEnumerable<Thought> thoughts =
            user.IsAdministrator ?
            await _thoughtQueries.GetAllThoughtsForAdmin() :
            await _thoughtQueries.GetAllThoughts(user.UserName);

        IEnumerable<Dtos.ThoughtForView> response = thoughts.Select(x => _mapper.Map<Dtos.ThoughtForView>(x));

        return Ok(thoughts);
    }

    [HttpGet("Recent")]
    public async Task<ActionResult<IEnumerable<Dtos.ThoughtForView>>> GetLastTen()
    {
        string userName = User?.Identity?.Name ?? throw new System.Exception("No user found");
        ApplicationUser user = await _userManager.FindByNameAsync(userName);

        IEnumerable<Thought> thoughts =
            user.IsAdministrator ?
            await _thoughtQueries.GetRecentThoughtsForAdmin() :
            await _thoughtQueries.GetRecentThoughts(user.UserName);

        IEnumerable<Dtos.ThoughtForView> response = thoughts.Select(x => _mapper.Map<Dtos.ThoughtForView>(x));

        return Ok(response);
    }


    [HttpPost]
    public async Task<ActionResult> SaveThought([FromBody] Dtos.ThoughtForSave thought)
    {
        string userName = User?.Identity?.Name ?? throw new System.Exception("No user found");
        ApplicationUser user = await _userManager.FindByNameAsync(userName);

        if (thought == null)
        {
            return BadRequest();
        }

        Thought thoughtToSave = _mapper.Map<Thought>(thought);

        thoughtToSave.DateCreated = DateTimeOffset.UtcNow;
        thoughtToSave.UserCreated = user;

        await _thoughtCommands.SaveThought(thoughtToSave);

        return Ok();
    }
}
