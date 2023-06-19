using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entitys.Dto.RequestDto
{
    public class UsuarioRequestDto
    {

        public string Nombre { get; set; } = null!;

        public string Correo { get; set; } = null!;

        public int? IdCliente { get; set; }

        public string Contrasenia { get; set; } = null!;

    }
}
