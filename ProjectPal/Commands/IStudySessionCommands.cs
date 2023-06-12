using ProjectPal.Data;

namespace ProjectPal.Commands;

public interface IStudySessionCommands
{
    Task SaveStudySession(StudySession studySession);
}
