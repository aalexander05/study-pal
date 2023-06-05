namespace ProjectPal.Data;

public class Thought
{
    public int ThoughtId { get; set; }
    public string Text { get; set; }
    public DateTimeOffset DateCreated { get; set; }
}
