using System;
using System.Collections.Generic;

namespace Entitys.Entity;

public partial class Cliente : BaseEntity
{
    //public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Apellidos { get; set; }

    public string? Direccion { get; set; }

    public virtual Usuario? Usuario { get; set; } = null!;
    public virtual ICollection<ClienteArticulo>? ClienteArticulos { get; set; } = new List<ClienteArticulo>();
}
