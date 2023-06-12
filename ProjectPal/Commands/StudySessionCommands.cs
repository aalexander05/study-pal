using ProjectPal.Data;

namespace ProjectPal.Commands;

public class StudySessionCommands : IStudySessionCommands
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
}
