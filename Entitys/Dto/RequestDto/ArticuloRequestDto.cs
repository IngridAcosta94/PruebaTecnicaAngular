using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entitys.Dto.RequestDto
{
    public class ArticuloRequestDto
    {

        public string? Codigo { get; set; }

        public string? Descripcion { get; set; }

        public decimal? Precio { get; set; }

        public string? Imagen { get; set; }

        public int? Stock { get; set; }

    }
}
