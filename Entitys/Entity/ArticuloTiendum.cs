using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entitys.Entity;

public partial class ArticuloTiendum
{
    public int IdArticuloTienda { get; set; }

    public int IdArticulo { get; set; }

    public int IdTienda { get; set; }

    public DateTime? Fecha { get; set; }

    [NotMapped]
    public string? NombreArticulo { get; set; }

    [NotMapped]
    public string? CodigoArticulo { get; set; }

    [NotMapped]
    public string? NombreTienda { get; set; }

    public virtual Articulo? IdArticuloNavigation { get; set; } = null!;

    public virtual Tiendum? IdTiendaNavigation { get; set; } = null!;
}
