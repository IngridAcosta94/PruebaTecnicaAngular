using AutoMapper;
using Data.DataDB;
using Entitys.Dto.RequestDto;
using Entitys.Dto.ResponseDto;
using Entitys.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using WebApi.Responses;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticuloTiendaController : ControllerBase
    {
        private readonly PruebaTecnicaContext _context;
        private readonly IMapper _mapper;
        public ArticuloTiendaController(IMapper mapper, PruebaTecnicaContext context)
        {
            _context = context;
            this._mapper = mapper;
        }

        [HttpGet]
        [Route("Lista")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<ArticuloTiendaResponseDto>>))]
        public async Task<IActionResult> Lista()
        {



            var listaArticuloTienda = await _context.ArticuloTienda.ToListAsync();

            foreach ( ArticuloTiendum item in listaArticuloTienda)
            {

                var result = await _context.Articulos.Where(x => x.Id == item.IdArticulo).FirstOrDefaultAsync();

                item.NombreArticulo = result!.Descripcion;
                item.CodigoArticulo = result!.Codigo;


            }
              

            

            var articuloTiendadtos = _mapper.Map<IEnumerable<ArticuloTiendaResponseDto>>(listaArticuloTienda);
            var response = new ApiResponses<IEnumerable<ArticuloTiendaResponseDto>>(data: articuloTiendadtos);

            return Ok(response);
        }

        [HttpGet]
        [Route("ListaArticuloTienda")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<ArticuloTiendaResponseDto>>))]
        public async Task<IActionResult> ListaArticuloTienda(int idSucursal)
        {



            var listaArticuloTienda = await _context.ArticuloTienda.Where(x => x.IdTienda == idSucursal).ToListAsync();

            foreach (ArticuloTiendum item in listaArticuloTienda)
            {

                var result = await _context.Articulos.Where(x => x.Id == item.IdArticulo).FirstOrDefaultAsync();

                item.NombreArticulo = result!.Descripcion;
                item.CodigoArticulo = result!.Codigo;


            }




            var articuloTiendadtos = _mapper.Map<IEnumerable<ArticuloTiendaResponseDto>>(listaArticuloTienda);
            var response = new ApiResponses<IEnumerable<ArticuloTiendaResponseDto>>(data: articuloTiendadtos);

            return Ok(response);
        }


        [HttpGet]
        [Route("Detail")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<IEnumerable<ArticuloTiendaResponseDto>>))]
        public async Task<IActionResult> Detail(int id)
        {
            var articuloTienda = await _context.ArticuloTienda.FindAsync(id);

            var dtoArticuloTienda = _mapper.Map<ArticuloTiendaResponseDto>(articuloTienda);
            var response = new ApiResponses<ArticuloTiendaResponseDto>(data: dtoArticuloTienda);
            return Ok(response);
        }


        [HttpPost]
        [Route("Agregar")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(ApiResponses<ArticuloTiendaRequestDto>))]
        public async Task<IActionResult> Agregar([FromBody] ArticuloTiendaRequestDto requestDto)
        {

            var entity = _mapper.Map<ArticuloTiendum>(requestDto);
            await _context.ArticuloTienda.AddAsync(entity);
            await _context.SaveChangesAsync();
            var result = _mapper.Map<ArticuloTiendaResponseDto>(entity);
            var response = new ApiResponses<ArticuloTiendaResponseDto>(result);

            return Ok(response);

        }


        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<ActionResult> Eliminar(int id)
        {

            var ArticuloTiendaEliminar = await _context.ArticuloTienda.FindAsync(id);

            if (ArticuloTiendaEliminar == null)

                return BadRequest("No existe el registro");

            _context.ArticuloTienda.Remove(ArticuloTiendaEliminar);

            await _context.SaveChangesAsync();

            return Ok("Se elimino con éxito");

        }


        [HttpPut]
        [Route("Editar/{id:int}")]
        public async Task<ActionResult> Editar(int id, [FromBody] ArticuloTiendaRequestDto requestDto)
        {

            var articuloEditar = await _context.ArticuloTienda.FindAsync(id);

            if (articuloEditar == null)

                return BadRequest("No existe el registro");

            var newEntity = _mapper.Map<ArticuloTiendum>(requestDto);

            _context.ArticuloTienda.Update(newEntity);

            await _context.SaveChangesAsync();


            var result = _mapper.Map<ArticuloTiendaResponseDto>(newEntity);
            var response = new ApiResponses<ArticuloTiendaResponseDto>(result);

            return Ok(response);

        }
    }
}
