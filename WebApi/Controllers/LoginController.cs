using AutoMapper;
using Data.DataDB;
using Entitys.Dto.RequestDto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly PruebaTecnicaContext _context;
        private readonly IMapper _mapper;
        public LoginController(IMapper mapper, PruebaTecnicaContext context)
        {
            _context = context;
            this._mapper = mapper;
        }

        [HttpPost]
        [Route("InicioSesion")]
        public async Task<IActionResult> InicioSesion([FromBody] LoginRequestDto requestDto)
        {

            var result = await _context.Usuarios.Where(x => x.Nombre == requestDto.NombreUsuario && x.Contrasenia == requestDto.Contrasenia).FirstOrDefaultAsync();

            if (result == null)
                return NotFound();

            return Ok(result);
        }




    }
}
