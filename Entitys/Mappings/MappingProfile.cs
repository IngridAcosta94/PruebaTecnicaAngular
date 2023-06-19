using AutoMapper;
using Entitys.Dto.RequestDto;
using Entitys.Dto.ResponseDto;
using Entitys.Dto.UpdateRequestDto;
using Entitys.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Entitys.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
           //MAPEO CLIENTE
                CreateMap<ClienteRequestDto, Cliente>()
                .ForMember(destination => destination.Nombre, act => act.MapFrom(source => source.Nombre))
                .ForMember(destination => destination.Direccion, act => act.MapFrom(source => source.Direccion))
                .ForMember(destination => destination.Apellidos, act => act.MapFrom(source => source.Apellidos))
                .AfterMap(
                 ((source, destination) => {
                     //destination.Id = ;
                     destination.ClienteArticulos = null;
                     destination.Usuario = null;
                 }));
                CreateMap<ClienteUpdateRequestDto, Cliente>();
                CreateMap<Cliente, ClienteRequestDto>();
                CreateMap<Cliente, ClienteResponseDto>();
                CreateMap<ClienteResponseDto, Cliente>()
                 .ForMember(destination => destination.Id, act => act.MapFrom(source => source.Id));

            //MAPEO TIENDA

            CreateMap<TiendaRequestDto, Tiendum>()
               .ForMember(destination => destination.Sucursal, act => act.MapFrom(source => source.Sucursal))
               .ForMember(destination => destination.Direccion, act => act.MapFrom(source => source.Direccion));
            CreateMap<TiendaUpdateRequestDto,Tiendum>();
            CreateMap<Tiendum, TiendaRequestDto>();
            CreateMap<Tiendum, TiendaResponseDto>();
            CreateMap<TiendaResponseDto, Tiendum>()
                .ForMember(destination => destination.Id, act => act.MapFrom(source => source.Id));

            //MAPEO ARTICULO

            CreateMap<ArticuloRequestDto, Articulo>()
             .ForMember(destination => destination.Codigo, act => act.MapFrom(source => source.Codigo))
             .ForMember(destination => destination.Descripcion, act => act.MapFrom(source => source.Descripcion))
             .ForMember(destination => destination.Stock, act => act.MapFrom(source => source.Stock))
             .ForMember(destination => destination.Precio, act => act.MapFrom(source => source.Precio))
            .AfterMap(
                 ((source, destination) => {
                     destination.ClienteArticulos = null;
                     destination.ArticuloTienda = null;
                     destination.Imagen = "";
                 }));
            CreateMap<ArticuloUpdateRequestDto, Articulo>();
            CreateMap<Articulo, ArticuloRequestDto>();
            CreateMap<Articulo, ArticuloResponseDto>();
            CreateMap<ArticuloResponseDto, Articulo>()
                .ForMember(destination => destination.Id, act => act.MapFrom(source => source.Id));

            //MAPEO USUARIO
            CreateMap<UsuarioRequestDto, Usuario>()
             .ForMember(destination => destination.Nombre, act => act.MapFrom(source => source.Nombre))
             .ForMember(destination => destination.Correo, act => act.MapFrom(source => source.Correo))
             .ForMember(destination => destination.Contrasenia, act => act.MapFrom(source => source.Contrasenia))
             .ForMember(destination => destination.IdCliente, act => act.MapFrom(source => source.IdCliente))
             .AfterMap(
                 ((source, destination) => {
                     destination.IdClienteNavigation = null;
                     //destination.Usuario = null;
                 }));
            CreateMap<Usuario, UsuarioRequestDto>();
            CreateMap<Usuario, UsuarioResponseDto>();
            CreateMap<UsuarioResponseDto, Usuario>()
                .ForMember(destination => destination.Id, act => act.MapFrom(source => source.Id));

            //MAPEO CLIENTEARTICULO

            CreateMap<ClienteArticuloRequestDto, ClienteArticulo>()
           .ForMember(destination => destination.IdCliente, act => act.MapFrom(source => source.IdCliente))
           .ForMember(destination => destination.IdArticulo, act => act.MapFrom(source => source.IdArticulo))
          .AfterMap(
                 ((source, destination) => {
                     destination.Fecha = DateTime.Now;
                     
                 }));
            CreateMap<ClienteArticulo, ClienteArticuloRequestDto>();
            CreateMap<ClienteArticulo, ClienteArticuloResponseDto>();
            CreateMap<ClienteArticuloResponseDto, ClienteArticulo>()
                .ForMember(destination => destination.IdClienteArticulo, act => act.MapFrom(source => source.IdClienteArticulo));


            //MAPEO ARTICULOTIENDA

            CreateMap<ArticuloTiendaRequestDto, ArticuloTiendum>()
             .ForMember(destination => destination.IdTienda, act => act.MapFrom(source => source.IdTienda))
             .ForMember(destination => destination.IdArticulo, act => act.MapFrom(source => source.IdArticulo))
             .AfterMap(
               ((source, destination) => {
                   destination.Fecha = DateTime.Now;

               }));
            CreateMap<ArticuloTiendum, ArticuloTiendaRequestDto>();
            CreateMap<ArticuloTiendum, ArticuloTiendaResponseDto>();
            CreateMap<ArticuloTiendaResponseDto, ArticuloTiendum>()
           .ForMember(destination => destination.IdArticuloTienda, act => act.MapFrom(source => source.IdArticuloTienda));


            //MAPEO LOGIN

            CreateMap<LoginRequestDto, Login>()
             .ForMember(destination => destination.NombreUsuario, act => act.MapFrom(source => source.NombreUsuario))
             .ForMember(destination => destination.Contrasenia, act => act.MapFrom(source => source.Contrasenia));
            CreateMap<Login, LoginRequestDto>();
            CreateMap<Login, LoginResponseDto>();
            CreateMap<LoginResponseDto, Login>()
            .ForMember(destination => destination.NombreUsuario, act => act.MapFrom(source => source.NombreUsuario))
             .ForMember(destination => destination.Contrasenia, act => act.MapFrom(source => source.Contrasenia));
            //.ForMember(destination => destination.Id, act => act.MapFrom(source => source.Id));

        }
    }
}
