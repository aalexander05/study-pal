namespace ProjectPal.Data;

public class Project : AuditableEntity
{
    public int ProjectId { get; set; }
    public IEnumerable<RawMaterial> RawMaterials { get; set; }

}