using ProjectPal.Data;

namespace ProjectPal.Queries;

public interface IStudySessionQueries
{
    Task<IEnumerable<StudySession>> GetAllForUser(string username);
    Task<IEnumerable<StudySession>> GetRecentForUser(string username);
    Task<StudySession> GetByIdForUser(int studySessionId, string username);
    Task<IEnumerable<StudySession>> GetForSummaryForUser(string username);
}
