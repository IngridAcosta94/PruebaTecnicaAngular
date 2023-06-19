using AutoMapper;
using Data.DataDB;
using Entitys.Dto.RequestDto;
using Entitys.Dto.ResponseDto;
using Entitys.Entity;
using FluentAssertions.Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Net;
using WebApi.Responses;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {

        private readonly PruebaTecnicaContext _context;
        private readonly IMapper _mapper;
        public UsuarioController(IMapper mapper, PruebaTecnicaContext context)
        {
            _context = context;
            this._mapper = mapper;
        }

       

        [HttpPost]
        [Route("Registrar")]
        public async Task<IActionResult> Registrar([FromBody] UsuarioRequestDto requestDto)
        {

            var entity = _mapper.Map<Usuario>(requestDto);
            await _context.Usuarios.AddAsync(entity);
            await _context.SaveChangesAsync();

            var result = _mapper.Map<UsuarioResponseDto>(entity);
            var response = new ApiResponses<UsuarioResponseDto>(result);

            return Ok(response);
        }


        [HttpGet]
        [Route("Lista")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<UsuarioResponseDto>>))]
        public async Task<IActionResult> Lista()
        {

            var listaUsuarios = await _context.Usuarios.ToListAsync();

            var usuariodtos = _mapper.Map<IEnumerable<UsuarioResponseDto>>(listaUsuarios);
            var response = new ApiResponses<IEnumerable<UsuarioResponseDto>>(data: usuariodtos);

            return Ok(response);
        }


        [HttpGet]
        [Route("Detail")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<UsuarioResponseDto>>))]
        public async Task<IActionResult> Detail(int id)
        {
            var usuario = await _context.Usuarios.FindAsync(id);

            var dtoUsuario = _mapper.Map<UsuarioResponseDto>(usuario);
            var response = new ApiResponses<UsuarioResponseDto>(data: dtoUsuario);
            return Ok(response);
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<ActionResult> Eliminar(int id)
        {

            var UsuarioEliminar = await _context.Usuarios.FindAsync(id);

            if (UsuarioEliminar == null)

                return BadRequest("No existe el usuario");

            _context.Usuarios.Remove(UsuarioEliminar);

            await _context.SaveChangesAsync();

            return Ok("Se elimino con éxito");

        }


        [HttpPut]
        [Route("Editar/{id:int}")]
        public async Task<ActionResult> Editar(int id, [FromBody] UsuarioRequestDto requestDto)
        {

            var usuarioEditar = await _context.Usuarios.FindAsync(id);

            if (usuarioEditar == null)

                return BadRequest("No existe el articulo");

            var newEntity = _mapper.Map<Usuario>(requestDto);

            _context.Usuarios.Update(newEntity);

            await _context.SaveChangesAsync();


            var result = _mapper.Map<UsuarioResponseDto>(newEntity);
            var response = new ApiResponses<UsuarioResponseDto>(result);

            return Ok(response);

        }


    }
}
