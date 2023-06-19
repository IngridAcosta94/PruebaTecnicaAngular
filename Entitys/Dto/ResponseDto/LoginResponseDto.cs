using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entitys.Dto.ResponseDto
{
    public class LoginResponseDto
    {
        public string NombreUsuario { get; set; } = null!;
        public string Contrasenia { get; set; } = null!;

    }
}
