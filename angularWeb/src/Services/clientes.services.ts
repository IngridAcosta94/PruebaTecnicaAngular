import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { BaseService } from "./base.services";
import { Cliente, ClienteResponse } from "src/Interfaces/cliente.interfaces";
import { ResponseData, ResponseDataModel } from "src/Interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})

export class ClienteService extends BaseService<ClienteService>{
  path: string;
  pathSetings: string;
  pathSetingName: string;
  setingsStatus: String;



  constructor(public override http: HttpClient) {
    super(http);
    this.path = '/Cliente/';
    this.pathSetings = ""
    this.setingsStatus = ""
    this.pathSetingName = ""
  }

  public registroCliente(model: Cliente): Observable<ResponseDataModel<ClienteResponse>> {

    return this.http.post<ResponseDataModel<ClienteResponse>>(this.url + this.path + "Agregar", model)
    
  }

  public getClients(): Observable<ResponseData<ClienteResponse[]>> {
    return this.http.get<ResponseData<ClienteResponse[]>>(this.url + this.path + "Lista");
  }

  public getClientDetail(id: number): Observable<ResponseDataModel<ClienteResponse>> {
    return this.http.get<ResponseDataModel<ClienteResponse>>(this.url + this.path + "Detail?id=" + id);
  }

  public deleteClient(id: number){
    return this.http.delete(this.url +this.path + "Eliminar/" + id)
  }

  public editClient(id: number ,model: Cliente) {

    return this.http.put(this.url + this.path + "Editar/"  + id , model);

  }


}
