namespace ProjectPal.Dtos;

public class StudySummary
{
    public int NumberOfMinutesStudiedThePastMonth { get; set; }
    public int NumberOfStudySessionsThePastMonth { get; set; }
    public IEnumerable<string> MostStudiedTopics { get; set; }
}
