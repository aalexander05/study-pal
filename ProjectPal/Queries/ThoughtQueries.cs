using Microsoft.EntityFrameworkCore;
using ProjectPal.Data;

namespace ProjectPal.Queries;

public class ThoughtQueries : IThoughtQueries
{
    private readonly ProjectPalContext _projectPalContext;

    public ThoughtQueries(ProjectPalContext projectPalContext)
    {
        _projectPalContext = projectPalContext;
    }

    public async Task<IEnumerable<Thought>> GetAllThoughts()
    {
        return await _projectPalContext.Thoughts
            .OrderByDescending(x => x.DateCreated)
            .ToListAsync();
    }

    public async Task<IEnumerable<Thought>> GetAllThoughts(string username)
    {
        return await _projectPalContext.Thoughts
            .Where(x => x.UserCreated.UserName == username)
            .OrderByDescending(x => x.DateCreated)
            .ToListAsync();
    }

    public async Task<IEnumerable<Thought>> GetRecentThoughts(string username)
    {
        return await _projectPalContext.Thoughts
            .Where(x => x.UserCreated.UserName == username)
            .OrderByDescending(x => x.DateCreated)
            .Take(10)
            .ToListAsync();
    }

    public async Task<IEnumerable<Thought>> GetRecentThoughts()
    {
        return await _projectPalContext.Thoughts
            .OrderByDescending(x => x.DateCreated)
            .Take(10)
            .ToListAsync();
    }
}
