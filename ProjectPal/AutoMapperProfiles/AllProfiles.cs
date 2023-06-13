using AutoMapper;
using ProjectPal.Data;

namespace ProjectPal.AutoMapperProfiles;

public class AllProfiles : Profile
{
	public AllProfiles()
	{
        CreateMap<Thought, Dtos.ThoughtForSave>().ReverseMap();
        CreateMap<Thought, Dtos.ThoughtForView>();

        CreateMap<StudySession, Dtos.StudySessionView>().ReverseMap();
        CreateMap<StudySessionLink, Dtos.StudySessionLink>().ReverseMap();
        CreateMap<StudySessionTag, Dtos.StudySessionTag>().ReverseMap();
    }
}
