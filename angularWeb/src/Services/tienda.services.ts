import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { BaseService } from "./base.services";
import { Cliente, ClienteResponse } from "src/Interfaces/cliente.interfaces";
import { ResponseData, ResponseDataModel } from "src/Interfaces/interfaces";
import { Articulo, ArticuloResponse } from "src/Interfaces/articulo.interfaces";
import { Tienda, TiendaResponse } from "src/Interfaces/tienda.interface";

@Injectable({
  providedIn: 'root'
})

export class TiendaService extends BaseService<TiendaService>{
  path: string;
  pathSetings: string;
  pathSetingName: string;
  setingsStatus: String;



  constructor(public override http: HttpClient) {
    super(http);
    this.path = '/Tienda/';
    this.pathSetings = ""
    this.setingsStatus = ""
    this.pathSetingName = ""
  }

  public registroTienda(model: Tienda): Observable<ResponseDataModel<TiendaResponse>> {

    return this.http.post<ResponseDataModel<TiendaResponse>>(this.url + this.path + "Agregar", model)
    
  }

  public getTiendas(): Observable<ResponseData<TiendaResponse[]>> {
    return this.http.get<ResponseData<TiendaResponse[]>>(this.url + this.path + "Lista");
  }

  public getTiendaDetail(id: number): Observable<ResponseDataModel<TiendaResponse>> {
    return this.http.get<ResponseDataModel<TiendaResponse>>(this.url + this.path + "Detail?id=" + id);
  }

  public deleteTienda(id: number){
    return this.http.delete(this.url +this.path + "Eliminar/" + id)
  }

  public editTienda(id: number ,model: Tienda) {

    return this.http.put(this.url + this.path + "Editar/"  + id , model);

  }


  


}
