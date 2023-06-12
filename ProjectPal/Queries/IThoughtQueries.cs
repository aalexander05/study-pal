using ProjectPal.Data;

namespace ProjectPal.Queries;

public interface IThoughtQueries
{
    /// <summary>
    /// Gets all thoughts limited to records a user has created
    /// </summary>
    /// <param name="username"></param>
    /// <returns></returns>
    Task<IEnumerable<Thought>> GetAllThoughts(string username);

    /// <summary>
    /// All records - for Administrators
    /// </summary>
    /// <returns></returns>
    Task<IEnumerable<Thought>> GetAllThoughtsForAdmin();

    /// <summary>
    /// Gets most recent records limited to records a user has created
    /// </summary>
    /// <param name="username"></param>
    /// <returns></returns>
    Task<IEnumerable<Thought>> GetRecentThoughts(string username);

    /// <summary>
    /// Gets most recent records - for Administrators
    /// </summary>
    /// <returns></returns>
    Task<IEnumerable<Thought>> GetRecentThoughtsForAdmin();
}
