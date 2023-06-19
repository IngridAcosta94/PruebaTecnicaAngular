import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {


  formLogin: FormGroup = new FormGroup({
    nombreUsuario: new FormControl(""),
    contrasenia: new FormControl(""),
  });

  constructor(public usuarioService: AuthService, public router: Router,  public snakbar: MatSnackBar,){

    this.formLogin = new FormGroup({
      nombreUsuario: new FormControl(""),
      contrasenia: new FormControl(""),
      });
  }


  loading: boolean = false;
  login(){

    this.snakbar.open("Iniciando sesión...", "");
    this.loading = true
    this.usuarioService.login(this.formLogin.value).subscribe(resp => {

      if (resp) {

        this.loading = false;
        this.snakbar.dismiss()
        this.router.navigate([`${'indexclient'}`]);
        // this.snakbar.open("Sessión iniciada con exito...", "");
      }


    });

  }


}
