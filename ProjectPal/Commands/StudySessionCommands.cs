using Microsoft.EntityFrameworkCore;
using ProjectPal.Data;

namespace ProjectPal.Commands;

[Service]
public class StudySessionCommands
{
    private readonly ProjectPalContext _projectPalContext;

    public StudySessionCommands(ProjectPalContext projectPalContext)
    {
        _projectPalContext = projectPalContext;
    }

    public async Task SaveStudySession(StudySession studySession)
    {
        _projectPalContext.StudySessions.Add(studySession);
        await _projectPalContext.SaveChangesAsync();

    }

    public async Task UpdateStudySession(StudySession studySession)
    {
        _projectPalContext.StudySessions.Update(studySession);
        await _projectPalContext.SaveChangesAsync();
    }
}
