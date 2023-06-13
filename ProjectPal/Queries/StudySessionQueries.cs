using Microsoft.EntityFrameworkCore;
using ProjectPal.Data;

namespace ProjectPal.Queries
{
    public class StudySessionQueries : IStudySessionQueries
    {
        private readonly ProjectPalContext _projectPalContext;

        public StudySessionQueries(ProjectPalContext projectPalContext)
        {
            _projectPalContext = projectPalContext;
        }

        public async Task<IEnumerable<StudySession>> GetAllForUser(string username)
        {
            return await _projectPalContext.StudySessions
                .Where(x => x.UserCreated.UserName == username)
                .ToListAsync();
        }

        public async Task<StudySession> GetByIdForUser(int studySessionId, string username)
        {
            return await _projectPalContext.StudySessions
                .FirstOrDefaultAsync(x => x.UserCreated.UserName == username && x.StudySessionId == studySessionId)
                ?? throw new System.Exception("No Study Session record found");
        }

        public async Task<IEnumerable<StudySession>> GetRecentForUser(string username)
        {
            DateTimeOffset twoWeeksAgo = DateTimeOffset.UtcNow.AddDays(-14);

            return await _projectPalContext.StudySessions
                .Where(x => x.UserCreated.UserName == username
                    && x.DateStudied > twoWeeksAgo)
                .ToListAsync();
        }
    }
}
