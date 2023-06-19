using AutoMapper;
using Data.DataDB;
using Entitys.Dto.RequestDto;
using Entitys.Dto.ResponseDto;
using Entitys.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using WebApi.Responses;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteArticuloController : ControllerBase
    {


        private readonly PruebaTecnicaContext _context;
        private readonly IMapper _mapper;
        public ClienteArticuloController(IMapper mapper, PruebaTecnicaContext context)
        {
            _context = context;
            this._mapper = mapper;
        }

        [HttpGet]
        [Route("Lista")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<ClienteArticuloResponseDto>>))]
        public async Task<IActionResult> Lista()
        {

            var listaClienteArticulo = await _context.ClienteArticulos.ToListAsync();

            var clienteArticulodtos = _mapper.Map<IEnumerable<ClienteArticuloResponseDto>>(listaClienteArticulo);
            var response = new ApiResponses<IEnumerable<ClienteArticuloResponseDto>>(data: clienteArticulodtos);

            return Ok(response);
        }


        [HttpGet]
        [Route("Detail")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<ClienteArticuloResponseDto>>))]
        public async Task<IActionResult> Detail(int id)
        {
            var clienteArticulo = await _context.ClienteArticulos.FindAsync(id);

            var dtoClienteArticulo = _mapper.Map<ClienteArticuloResponseDto>(clienteArticulo);
            var response = new ApiResponses<ClienteArticuloResponseDto>(data: dtoClienteArticulo);
            return Ok(response);
        }


        [HttpPost]
        [Route("Agregar")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<ClienteArticuloRequestDto>))]
        public async Task<IActionResult> Agregar([FromBody] ClienteArticuloRequestDto requestDto)
        {

            var entity = _mapper.Map<ClienteArticulo>(requestDto);
            await _context.ClienteArticulos.AddAsync(entity);
            await _context.SaveChangesAsync();
            var result = _mapper.Map<ClienteArticuloResponseDto>(entity);
            var response = new ApiResponses<ClienteArticuloResponseDto>(result);

            return Ok(response);

        }


        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<ActionResult> Eliminar(int id)
        {

            var clienteArticuloEliminar = await _context.ClienteArticulos.FindAsync(id);

            if (clienteArticuloEliminar == null)

                return BadRequest("No existe el registro");

            _context.ClienteArticulos.Remove(clienteArticuloEliminar);

            await _context.SaveChangesAsync();

            return Ok("Se elimino con éxito");

        }


        [HttpPut]
        [Route("Editar/{id:int}")]
        public async Task<ActionResult> Editar(int id, [FromBody] ClienteArticuloRequestDto requestDto)
        {

            var clienteArticuloEditar = await _context.ClienteArticulos.FindAsync(id);

            if (clienteArticuloEditar == null)

                return BadRequest("No existe el registro");

            var newEntity = _mapper.Map<ClienteArticulo>(requestDto);

            _context.ClienteArticulos.Update(newEntity);

            await _context.SaveChangesAsync();


            var result = _mapper.Map<ClienteArticuloResponseDto>(newEntity);
            var response = new ApiResponses<ClienteArticuloResponseDto>(result);

            return Ok(response);

        }
    }
}
