

export interface Articulo{

    codigo: string;
    descripcion: string;
    precio: number;
    imagen: string;
    stock: number;

}

export interface ArticuloResponse{

    id: number;
    codigo: string;
    descripcion: string;
    precio: number;
    imagen: string;
    stock: number;
    selected?: boolean;

}

export interface ArticuloUpdate{

    
}


export interface ArticuloTiendaPost{

 idArticulo: number;
  idTienda: number;

}

export interface ArticuloTiendaResponse{

    idArticulo: number;
     idTienda: number;
     nombreTienda?: string;
     codigoArticulo?: string;
     nombreArticulo?: string;
   
   }