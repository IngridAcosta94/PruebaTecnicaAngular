import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { BaseService } from "./base.services";
import { Usuario, UsuarioLogin } from "src/Interfaces/usuario.interface";

@Injectable({
  providedIn: 'root'
})

export class AuthService extends BaseService<AuthService>{
  path: string;
  pathSetings: string;
  pathSetingName: string;
  setingsStatus: String;



  constructor(public override http: HttpClient) {
    super(http);
    this.path = '/Usuario/';
    this.pathSetings = ""
    this.setingsStatus = ""
    this.pathSetingName = ""
  }


  public login(model: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(this.url + "/Login/" + "InicioSesion", model)
  }

  public registroUsuario(model: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url + this.path + "Registrar", model).pipe(
      catchError(() => throwError(() => new Error('Usuario no encontrado')))
    )
  }

}
