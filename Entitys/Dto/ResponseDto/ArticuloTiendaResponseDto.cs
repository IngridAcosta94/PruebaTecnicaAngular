using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entitys.Dto.ResponseDto
{
    public class ArticuloTiendaResponseDto
    {
        public int IdArticuloTienda { get; set; }

        public int IdArticulo { get; set; }

        public string? NombreArticulo { get; set; }
        public int IdTienda { get; set; }

        public string? NombreTienda { get; set; }

        public string? CodigoArticulo { get; set; }
        public DateTime? Fecha { get; set; }
    }
}
