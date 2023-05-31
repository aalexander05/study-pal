namespace ProjectPal.Data;

public class RawMaterial // : AuditableEntity
{
    public int RawMaterialId { get; set; }
    public string Name { get; set; } = "";
    public decimal Cost { get; set; }
}
