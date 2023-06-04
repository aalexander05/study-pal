using AutoMapper;
using ProjectPal.Data;

namespace ProjectPal.AutoMapperProfiles;

public class AllProfiles : Profile
{
	public AllProfiles()
	{
        CreateMap<Thought, Dtos.ThoughtForSave>();
        CreateMap<Dtos.ThoughtForSave, Thought>();
        CreateMap<Thought, Dtos.ThoughtForView>();
    }
}
