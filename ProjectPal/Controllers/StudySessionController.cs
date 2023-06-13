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
public class StudySessionController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly IStudySessionCommands _studySessionCommands;
    private readonly IStudySessionQueries _studySessionQueries;
    private readonly UserManager<ApplicationUser> _userManager;

    public StudySessionController(
        IMapper mapper,
        UserManager<ApplicationUser> userManager,
        IStudySessionCommands studySessionCommands,
        IStudySessionQueries studySessionQueries)
    {
        _mapper = mapper;
        _userManager = userManager;
        _studySessionCommands = studySessionCommands;
        _studySessionQueries = studySessionQueries;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Dtos.StudySessionView>>> GetAllForUser()
    {
        string username = User?.Identity?.Name ?? throw new System.Exception("No user found");

        IEnumerable<StudySession> studySessions = await _studySessionQueries.GetAllForUser(username);

        IEnumerable<Dtos.StudySessionView> studySessionViews = studySessions.Select(x => _mapper.Map<Dtos.StudySessionView>(x));

        return Ok(studySessionViews);
    }

    [HttpGet("Recent")]
    public async Task<ActionResult<IEnumerable<Dtos.StudySessionView>>> GetRecentForUser()
    {
        string username = User?.Identity?.Name ?? throw new System.Exception("No user found");

        IEnumerable<StudySession> studySessions = await _studySessionQueries.GetRecentForUser(username);

        IEnumerable<Dtos.StudySessionView> studySessionViews = studySessions.Select(x => _mapper.Map<Dtos.StudySessionView>(x));

        return Ok(studySessionViews);
    }

    [HttpPost]
    public async Task<ActionResult> SaveStudySession([FromBody] Dtos.StudySessionView studySessionView)
    {
        string userName = User?.Identity?.Name ?? throw new System.Exception("No user found");
        ApplicationUser user = await _userManager.FindByNameAsync(userName);

        if (studySessionView == null) {
            return BadRequest();
        }

        StudySession newSessionToSave = _mapper.Map<StudySession>(studySessionView);

        newSessionToSave.UserCreated = user;

        await _studySessionCommands.SaveStudySession(newSessionToSave);

        return Created("", _mapper.Map<Dtos.StudySessionView>(newSessionToSave) );
    }

}
