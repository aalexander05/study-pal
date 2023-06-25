using ProjectPal.Commands;
using ProjectPal.Queries;
using System.Reflection;

namespace ProjectPal;

public static class ServiceRegistration
{
    public static IServiceCollection AddApplicationServices(
            this IServiceCollection @this)
    {
        var serviceType = typeof(Service);
        var definedTypes = serviceType.Assembly.DefinedTypes;

        var services = definedTypes
            .Where(x => x.GetTypeInfo().GetCustomAttribute<Service>() != null);

        foreach (var service in services)
        {
            @this.AddScoped(service);
        }

        @this.AddScoped<IStudySessionQueries, StudySessionQueries>();
        @this.AddScoped<IThoughtQueries, ThoughtQueries>();

        return @this;
    }
}
