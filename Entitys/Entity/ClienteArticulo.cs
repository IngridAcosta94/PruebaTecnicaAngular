using System;
using System.Collections.Generic;
namespace Entitys.Entity;

public partial class ClienteArticulo
{
    public int IdClienteArticulo { get; set; }

    public int IdCliente { get; set; }

    public int IdArticulo { get; set; }

    public DateTime? Fecha { get; set; }

    public virtual Articulo? IdArticuloNavigation { get; set; } = null!;

    public virtual Cliente? IdClienteNavigation { get; set; } = null!;
}
