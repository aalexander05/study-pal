using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectPal.Data;

public class AuditableEntity
{

    public AuditableEntity()
    {
        CreatedByUser = new User();
        ModifiedByUser = new User();
    }

    [ForeignKey("User")]
    public int CreatedByUserId { get; set; }

    public DateTime DateCreated { get; set; }

    [ForeignKey("User")]
    public int ModifiedByUserId { get; set; }
    public DateTime ModifiedDate { get; set; }

    public virtual User CreatedByUser { get; set; }
    public virtual User ModifiedByUser { get; set; }

}
