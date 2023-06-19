import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClienteService } from 'src/Services/clientes.services';

@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css']
})
export class CreateclientComponent {

  
  formCliente: FormGroup = new FormGroup({

    Nombre: new FormControl(""),
    
    Apellidos: new FormControl(""),
    
    Direccion: new FormControl("")

  });


  constructor(public servicecliente:ClienteService, public router: Router, public snakbar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateclientComponent>){

    this.formCliente = new FormGroup({

      Nombre: new FormControl(""),
      
      Apellidos: new FormControl(""),
      
      Direccion: new FormControl("")
  
    });

  }


  CLoseDialog() {
    this.dialogRef.close(this.formCliente.value);
  }




}
