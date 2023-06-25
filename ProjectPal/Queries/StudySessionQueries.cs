using Microsoft.EntityFrameworkCore;
using ProjectPal.Data;
using ProjectPal.Dtos;

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
                .OrderByDescending(x => x.DateStudied)
                .ThenByDescending(x => x.StudySessionId)
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
                .OrderByDescending(x => x.DateStudied)
                .ThenByDescending(x => x.StudySessionId)
                .Take(10)
                .ToListAsync();
        }


        public async Task<IEnumerable<StudySession>> GetForSummaryForUser(string username)
        {
            DateTimeOffset thirtyDaysAgo = DateTimeOffset.UtcNow.AddDays(-30);

            return await _projectPalContext.StudySessions
                .Where(x => x.DateStudied > thirtyDaysAgo && x.UserCreated.UserName == username)
                .ToListAsync();
        }

    }
}
