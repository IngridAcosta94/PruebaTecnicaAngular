using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entitys.Dto.ResponseDto
{
    public class ClienteArticuloResponseDto
    {
        public int IdClienteArticulo { get; set; }

        public int IdCliente { get; set; }

        public string? NombreCliente { get; set; }
        public int IdArticulo { get; set; }

        public string? NombreArticulo { get; set; }
        public DateTime? Fecha { get; set; }
    }
}
