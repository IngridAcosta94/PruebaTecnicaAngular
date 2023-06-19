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
    public class ArticuloController : ControllerBase
    {


        private readonly PruebaTecnicaContext _context;
        private readonly IMapper _mapper;
        public ArticuloController(IMapper mapper, PruebaTecnicaContext context)
        {
            _context = context;
            this._mapper = mapper;
        }

        [HttpGet]
        [Route("Lista")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<ArticuloResponseDto>>))]
        public async Task<IActionResult> Lista()
        {

            var listaArticulos = await _context.Articulos.ToListAsync();

            var articulosdtos = _mapper.Map<IEnumerable<ArticuloResponseDto>>(listaArticulos);
            var response = new ApiResponses<IEnumerable<ArticuloResponseDto>>(data: articulosdtos);

            return Ok(response);
        }


        [HttpGet]
        [Route("Detail")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<ArticuloResponseDto>>))]
        public async Task<IActionResult> Detail(int id)
        {
            var articulo = await _context.Articulos.FindAsync(id);

            var dtoArticulo = _mapper.Map<ArticuloResponseDto>(articulo);
            var response = new ApiResponses<ArticuloResponseDto>(data: dtoArticulo);
            return Ok(response);
        }


        [HttpPost]
        [Route("Agregar")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<ArticuloRequestDto>))]
        public async Task<IActionResult> Agregar([FromBody] ArticuloRequestDto requestDto)
        {

            var entity = _mapper.Map<Articulo>(requestDto);
            await _context.Articulos.AddAsync(entity);
            await _context.SaveChangesAsync();
            var result = _mapper.Map<ArticuloResponseDto>(entity);
            var response = new ApiResponses<ArticuloResponseDto>(result);

            return Ok(response);

        }


        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<ActionResult> Eliminar(int id)
        {

            var ArticuloEliminar = await _context.Articulos.FindAsync(id);

            if (ArticuloEliminar == null)

                return BadRequest("No existe el cliente");

            _context.Articulos.Remove(ArticuloEliminar);

            await _context.SaveChangesAsync();

            return Ok();

        }


        [HttpPut]
        [Route("Editar/{id:int}")]
        public async Task<ActionResult> Editar(int id, [FromBody] ArticuloUpdateRequestDto requestDto)
        {

            var articuloEditar = await _context.Articulos.FindAsync(id);

            if (articuloEditar == null)

                return BadRequest("No existe el cliente");


            articuloEditar.Codigo = requestDto.Codigo;
            articuloEditar.Descripcion = requestDto.Descripcion;
            articuloEditar.Stock = requestDto.Stock;
            articuloEditar.Precio = requestDto.Precio;
            articuloEditar.Imagen = requestDto.Imagen;

            _context.Articulos.Update(articuloEditar);

            await _context.SaveChangesAsync();


            var result = _mapper.Map<ArticuloResponseDto>(articuloEditar);
            var response = new ApiResponses<ArticuloResponseDto>(result);

            return Ok(response);

        }





    }
}
