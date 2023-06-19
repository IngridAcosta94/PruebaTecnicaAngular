using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entitys.Dto.RequestDto
{
    public class LoginRequestDto
    {
        public string NombreUsuario { get; set; } = null!;
        public string Contrasenia { get; set; } = null!;

    }
}
