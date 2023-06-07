using ProjectPal.Data;
using ProjectPal.Dtos;

namespace ProjectPal.Commands
{
    public class ThoughtCommands : IThoughtCommands
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
}
