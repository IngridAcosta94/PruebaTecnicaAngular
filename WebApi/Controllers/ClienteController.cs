
using AutoMapper;
using Data.DataDB;
using Entitys.Dto.RequestDto;
using Entitys.Dto.ResponseDto;
using Entitys.Dto.UpdateRequestDto;
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
    public class ClienteController : ControllerBase
    {

        private readonly PruebaTecnicaContext _context;
        private readonly IMapper _mapper;
        public ClienteController(IMapper mapper, PruebaTecnicaContext context)
        {
            _context = context;
            this._mapper = mapper;
        }


        [HttpGet]
        [Route("Lista")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<ClienteResponseDto>>))]
        public async Task<IActionResult> Lista()
        {

            var listaClientes = await _context.Clientes.ToListAsync();

            var clientedtos = _mapper.Map<IEnumerable<ClienteResponseDto>>(listaClientes);
            var response = new ApiResponses<IEnumerable<ClienteResponseDto>>(data: clientedtos);

            return Ok(response);
        }


        [HttpGet]
        [Route("Detail")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<ClienteResponseDto>>))]
        public async Task<IActionResult> Detail(int id)
        {
          var cliente = await _context.Clientes.FindAsync(id);

            var dtoCliente = _mapper.Map<ClienteResponseDto>(cliente);
            var response = new ApiResponses<ClienteResponseDto>(data: dtoCliente);
            return Ok(response);
        }


        [HttpPost]
        [Route("Agregar")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<ClienteRequestDto>))]
        public async Task<IActionResult> Agregar([FromBody] ClienteRequestDto requestDto)
        {

            var entity = _mapper.Map<Cliente>(requestDto);

            await _context.Clientes.AddAsync(entity);
            await _context.SaveChangesAsync();


             var result = _mapper.Map<ClienteResponseDto>(entity);
             var response = new ApiResponses<ClienteResponseDto>(result);

            return Ok(response);


        }


        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<ActionResult> Eliminar(int id)
        {

            var clienteEliminar = await _context.Clientes.FindAsync(id);

            if (clienteEliminar == null)

                return BadRequest("No existe el cliente");

            _context.Clientes.Remove(clienteEliminar);

            await _context.SaveChangesAsync();

            return Ok();

        }


        [HttpPut]
        [Route("Editar/{id:int}")]
        public async Task<ActionResult> Editar(int id, [FromBody] ClienteUpdateRequestDto requestDto)
        {


            var clienteEditar = await _context.Clientes.FindAsync(id);

            if (clienteEditar == null)

                return BadRequest("No existe el cliente");

          
            clienteEditar.Apellidos = requestDto.Apellidos;
            clienteEditar.Direccion = requestDto.Direccion;
            clienteEditar.Nombre = requestDto.Nombre;
            _context.Clientes.Update(clienteEditar);

            await _context.SaveChangesAsync();


            var result = _mapper.Map<ClienteResponseDto>(clienteEditar);
            var response = new ApiResponses<ClienteResponseDto>(result);

            return Ok(response);

        }



    }
}
