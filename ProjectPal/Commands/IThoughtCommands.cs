using ProjectPal.Data;

namespace ProjectPal.Commands;

public interface IThoughtCommands
{
    Task SaveThought(Thought thought);
}
