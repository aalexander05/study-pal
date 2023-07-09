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
    private readonly StudySessionCommands _studySessionCommands;
    private readonly IStudySessionQueries _studySessionQueries;
    private readonly UserManager<ApplicationUser> _userManager;

    public StudySessionController(
        IMapper mapper,
        UserManager<ApplicationUser> userManager,
        StudySessionCommands studySessionCommands,
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

    [HttpGet("{id}")]
    public async Task<ActionResult<IEnumerable<Dtos.StudySessionView>>> GetByIdForUser(int id)
    {
        string username = User?.Identity?.Name ?? throw new System.Exception("No user found");

        StudySession studySession = await _studySessionQueries.GetByIdForUser(id, username);

        if (studySession == null)
        {
            return BadRequest("Could not find record.");
        }

        Dtos.StudySessionView studySessionView = _mapper.Map<Dtos.StudySessionView>(studySession);

        return Ok(studySessionView);
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
        if (studySessionView == null)
        {
            return BadRequest();
        }

        string userName = User?.Identity?.Name ?? throw new System.Exception("No user found");
        ApplicationUser user = await _userManager.FindByNameAsync(userName);

        StudySession newSessionToSave = _mapper.Map<StudySession>(studySessionView);

        newSessionToSave.UserCreated = user;

        await _studySessionCommands.SaveStudySession(newSessionToSave);

        return Created("", _mapper.Map<Dtos.StudySessionView>(newSessionToSave) );
    }


    [HttpPut]
    public async Task<ActionResult> UpdateStudySession([FromBody] Dtos.StudySessionView studySessionView)
    {
        if (studySessionView == null)
        {
            return BadRequest();
        }

        string username = User?.Identity?.Name ?? throw new System.Exception("No user found");

        StudySession studySession = await _studySessionQueries.GetByIdForUser(studySessionView.StudySessionId, username);

        _mapper.Map(studySessionView, studySession);

        await _studySessionCommands.UpdateStudySession(studySession);

        return Ok();

    }

    [HttpGet("Summary")]
    public async Task<ActionResult<Dtos.StudySummary>> GetSummary()
    {
        string username = User?.Identity?.Name ?? throw new System.Exception("No user found");

        IEnumerable<StudySession> studySessionsForSummary = await _studySessionQueries.GetForSummaryForUser(username);

        if (studySessionsForSummary == null || !studySessionsForSummary.Any())
        {
            return Ok();
        }

        List<string> mostStudiedTopics = studySessionsForSummary
            .GroupBy(x => x.Topic.Trim())
            .OrderByDescending(x => x.Count())
            .Take(3)
            .Select(x => x.First().Topic)
            .ToList();


        Dtos.StudySummary summary = new()
        {
            NumberOfMinutesStudiedThePastMonth = studySessionsForSummary.Sum(x => x.MinutesStudied),
            NumberOfStudySessionsThePastMonth = studySessionsForSummary.Count(),
            MostStudiedTopics = mostStudiedTopics
        };

        return Ok(summary);
    }

    [HttpDelete("{studySessionId}")]
    public async Task<ActionResult> DeleteStudySession([FromRoute] int studySessionId)
    {
        string username = User?.Identity?.Name ?? throw new System.Exception("No user found");

        StudySession studySession = await _studySessionQueries.GetByIdForUser(studySessionId, username);

        await _studySessionCommands.DeleteStudySession(studySession);

        return Ok();
    }

}
