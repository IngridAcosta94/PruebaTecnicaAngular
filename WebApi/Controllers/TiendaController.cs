
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
    public class TiendaController : ControllerBase
    {

        private readonly PruebaTecnicaContext _context;
        private readonly IMapper _mapper;
        public TiendaController(IMapper mapper, PruebaTecnicaContext context)
        {
            _context = context;
            this._mapper = mapper;
        }


        [HttpGet]
        [Route("Lista")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<TiendaResponseDto>>))]
        public async Task<IActionResult> Lista()
        {

            var listaTiendas = await _context.Tienda.ToListAsync();

            var tiendadtos = _mapper.Map<IEnumerable<TiendaResponseDto>>(listaTiendas);
            var response = new ApiResponses<IEnumerable<TiendaResponseDto>>(data: tiendadtos);

            return Ok(response);
        }


        [HttpGet]
        [Route("Detail")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<TiendaResponseDto>>))]
        public async Task<IActionResult> Detail(int id)
        {
            var tienda = await _context.Tienda.FindAsync(id);

            var dtoTienda = _mapper.Map<TiendaResponseDto>(tienda);
            var response = new ApiResponses<TiendaResponseDto>(data: dtoTienda);
            return Ok(response);
        }


        [HttpPost]
        [Route("Agregar")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<TiendaRequestDto>))]
        public async Task<IActionResult> Agregar([FromBody] TiendaRequestDto requestDto)
        {

            var entity = _mapper.Map<Tiendum>(requestDto);

            await _context.Tienda.AddAsync(entity);
            await _context.SaveChangesAsync();


            var result = _mapper.Map<TiendaResponseDto>(entity);
            var response = new ApiResponses<TiendaResponseDto>(result);

            return Ok(response);


        }


        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<ActionResult> Eliminar(int id)
        {

            var tiendaEliminar = await _context.Tienda.FindAsync(id);

            if (tiendaEliminar == null)

                return BadRequest("No existe la tienda");

            _context.Tienda.Remove(tiendaEliminar);

            await _context.SaveChangesAsync();

            return Ok();

        }


        [HttpPut]
        [Route("Editar/{id:int}")]
        public async Task<ActionResult> Editar(int id, [FromBody] TiendaUpdateRequestDto requestDto)
        {

            var tiendaEditar = await _context.Tienda.FindAsync(id);

            if (tiendaEditar == null)

                return BadRequest("No existe la tienda");


            tiendaEditar.Sucursal = requestDto.Sucursal;
            tiendaEditar.Direccion = requestDto.Direccion;
          
            _context.Tienda.Update(tiendaEditar);

            await _context.SaveChangesAsync();


            var result = _mapper.Map<TiendaResponseDto>(tiendaEditar);
            var response = new ApiResponses<TiendaResponseDto>(result);

            return Ok(response);

        }


    }

}

