using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectPal.Data;

public class AuditableEntity
{

    [ForeignKey("User")]
    public int CreatedByUserId { get; set; }

    public DateTime DateCreated { get; set; }

    [ForeignKey("User")]
    public int ModifiedByUserId { get; set; }
    public DateTime ModifiedDate { get; set; }
}
