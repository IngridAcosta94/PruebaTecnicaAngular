using System;
using System.Collections.Generic;

namespace Entitys.Entity;

public partial class Articulo : BaseEntity
{

    public string? Codigo { get; set; }

    public string? Descripcion { get; set; }

    public decimal? Precio { get; set; }

    public string? Imagen { get; set; }

    public int? Stock { get; set; }

    public virtual ICollection<ArticuloTiendum>? ArticuloTienda { get; set; } = new List<ArticuloTiendum>();

    public virtual ICollection<ClienteArticulo>? ClienteArticulos { get; set; } = new List<ClienteArticulo>();
}
