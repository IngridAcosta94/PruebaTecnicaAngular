import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, from, mergeMap, throwError } from "rxjs";
import { BaseService } from "./base.services";
import { Cliente, ClienteResponse } from "src/Interfaces/cliente.interfaces";
import { ResponseData, ResponseDataModel } from "src/Interfaces/interfaces";
import { Articulo, ArticuloResponse, ArticuloTiendaPost, ArticuloTiendaResponse } from "src/Interfaces/articulo.interfaces";

@Injectable({
  providedIn: 'root'
})

export class ArticuloService extends BaseService<ArticuloService>{
  path: string;
  pathSetings: string;
  pathSetingName: string;
  setingsStatus: String;



  constructor(public override http: HttpClient) {
    super(http);
    this.path = '/Articulo/';
    this.pathSetings = ""
    this.setingsStatus = ""
    this.pathSetingName = ""
  }

  public registroArticulo(model: Articulo): Observable<ResponseDataModel<ArticuloResponse>> {

    return this.http.post<ResponseDataModel<ArticuloResponse>>(this.url + this.path + "Agregar", model)
    
  }

  public registroArticuloTienda(models: ArticuloTiendaPost[] ): Observable<ArticuloTiendaResponse> {


    return from(models).pipe(
      mergeMap(model => <Observable<ArticuloTiendaResponse>> this.http.post(this.url + "/ArticuloTienda/" + "Agregar", model))
    );

  }

 
  

  public getArticuloTienda(): Observable<ResponseData<ArticuloResponse[]>> {
    return this.http.get<ResponseData<ArticuloResponse[]>>(this.url + this.path + "Lista");
  }

  public getArticuloByTienda(idSucursal: number): Observable<ResponseData<ArticuloTiendaResponse[]>> {
    return this.http.get<ResponseData<ArticuloTiendaResponse[]>>(this.url + "/ArticuloTienda/" + "ListaArticuloTienda?idSucursal=" + idSucursal);
  }


  public getArticulos(): Observable<ResponseData<ArticuloResponse[]>> {
    return this.http.get<ResponseData<ArticuloResponse[]>>(this.url + this.path + "Lista");
  }

  public getArticuloDetail(id: number): Observable<ResponseDataModel<ArticuloResponse>> {
    return this.http.get<ResponseDataModel<ArticuloResponse>>(this.url + this.path + "Detail?id=" + id);
  }

  public deleteArticulo(id: number){
    return this.http.delete(this.url +this.path + "Eliminar/" + id)
  }

  public editArticulo(id: number ,model: Articulo) {

    return this.http.put(this.url + this.path + "Editar/"  + id , model);

  }


}
