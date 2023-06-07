using ProjectPal.Data;

namespace ProjectPal.Queries;

public interface IThoughtQueries
{
    Task<IEnumerable<Thought>> GetAllThoughts(string username);

    /// <summary>
    /// For Administrators
    /// </summary>
    /// <returns></returns>
    Task<IEnumerable<Thought>> GetAllThoughts();

    Task<IEnumerable<Thought>> GetRecentThoughts(string username);

    /// <summary>
    /// For Administrators
    /// </summary>
    /// <returns></returns>
    Task<IEnumerable<Thought>> GetRecentThoughts();
}
