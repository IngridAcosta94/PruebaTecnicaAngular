using System;
using System.Collections.Generic;

namespace Entitys.Entity;


public partial class Tiendum : BaseEntity
{
    

    public string? Sucursal { get; set; }

    public string? Direccion { get; set; }

    public virtual ICollection<ArticuloTiendum>? ArticuloTienda { get; set; } = new List<ArticuloTiendum>();
}
