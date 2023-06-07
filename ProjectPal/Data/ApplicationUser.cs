using Microsoft.AspNetCore.Identity;

namespace ProjectPal.Data
{
    public class ApplicationUser : IdentityUser
    {
        public bool IsAdministrator { get; set; }
    }
}
