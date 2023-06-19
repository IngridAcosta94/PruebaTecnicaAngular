import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/Interfaces/usuario.interface';
import { AuthService } from 'src/Services/auth.services';
import { ClienteService } from 'src/Services/clientes.services';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent {

  user: Usuario = {

    Nombre: "",
    Contrasenia: "",
    Correo: "",
    IdCliente: 0,

  };

  formUsuario: FormGroup = new FormGroup({

    Nombre: new FormControl(""),
    
    Correo: new FormControl(""),
    
    Contrasenia: new FormControl(""),

    IdCliente: new FormControl(0),

  });

  formCliente: FormGroup = new FormGroup({

    Nombre: new FormControl(""),
    
    Apellidos: new FormControl(""),
    
    Direccion: new FormControl("")

  });


  constructor(public servicecliente:ClienteService,public serviceUsuario: AuthService, public router: Router, public snakbar: MatSnackBar, ){


    this.formCliente = new FormGroup({

      Nombre: new FormControl(""),
      
      Apellidos: new FormControl(""),
      
      Direccion: new FormControl("")
  
    });

    this.formUsuario = new FormGroup({

      Nombre: new FormControl(""),
      
      Correo: new FormControl(""),
      
      Contrasenia: new FormControl(""),
      IdCliente: new FormControl(0),

  
    });


  }



  registrar(){


    this.servicecliente.registroCliente(this.formCliente.value).subscribe(resp=>{

      this.user = this.formUsuario.value;

      this.user = {

        Nombre: this.user.Nombre,
        Correo: this.user.Correo,
        Contrasenia: this.user.Contrasenia,
        IdCliente: resp.data.id,
      }


      this.serviceUsuario.registroUsuario(this.user).subscribe(resp=>{

        this.router.navigate([`${'login'}`]);

        this.snakbar.open("Usuario registrado con exito...", "", {
          duration: 3000,
        });

      })

    });

  }


}
