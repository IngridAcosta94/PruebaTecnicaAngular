using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entitys.Dto.UpdateRequestDto
{
    public class ClienteUpdateRequestDto
    {

        //public int Id { get; set; }

        public string? Nombre { get; set; }

        public string? Apellidos { get; set; }

        public string? Direccion { get; set; }
    }
}
