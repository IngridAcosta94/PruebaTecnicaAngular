using System;
using System.Collections.Generic;

namespace Entitys.Entity;

public partial class Usuario : BaseEntity
{
   
    public string Nombre { get; set; } = null!;

    public string Correo { get; set; } = null!;

    public int? IdCliente { get; set; }

    public string Contrasenia { get; set; } = null!;

    public virtual Cliente? IdClienteNavigation { get; set; }
}
