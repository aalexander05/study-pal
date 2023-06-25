using ProjectPal.Data;

namespace ProjectPal.Commands;

[Service]
public class ThoughtCommands
{
    private readonly ProjectPalContext _projectPalContext;

    public ThoughtCommands(ProjectPalContext projectPalContext)
    {
        this._projectPalContext = projectPalContext;
    }

    public async Task SaveThought(Thought thought)
    {
        _projectPalContext.Thoughts.Add(thought);
        await _projectPalContext.SaveChangesAsync();
    }
}
