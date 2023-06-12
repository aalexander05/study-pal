namespace ProjectPal.Dtos;

public class StudySessionView
{
    public int StudySessionId { get; set; }
    public string Topic { get; set; }
    public IEnumerable<StudySessionLink> Links { get; set; }
    public IEnumerable<StudySessionTag> Tags { get; set; }
    public int MinutesStudied { get; set; }
    public string Notes { get; set; }
    public DateTimeOffset DateStudied { get; set; }
}
