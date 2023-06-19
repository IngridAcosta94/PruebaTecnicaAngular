import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClienteService } from 'src/Services/clientes.services';

@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.css']
})
export class DetailclientComponent {

  formCliente: FormGroup = new FormGroup({


    Nombre: new FormControl(""),
    
    Apellidos: new FormControl(""),
    
    Direccion: new FormControl("")

  });

  idClient: number = 0;

  constructor(public servicecliente:ClienteService, public router: Router, public snakbar: MatSnackBar,
    public dialogRef: MatDialogRef<DetailclientComponent>,  @Inject(MAT_DIALOG_DATA) private editID:number){

      this.idClient = editID;

    this.formCliente = new FormGroup({

      Nombre: new FormControl(""),
      
      Apellidos: new FormControl(""),
      
      Direccion: new FormControl("")
  
    });

  }


  ngOnInit(): void {
    this.loadCliente();
   }



  loadCliente(){

    this.servicecliente.getClientDetail(this.idClient).subscribe(resp => {

      this.formCliente.patchValue({

        Nombre: resp.data.nombre,
      
        Apellidos: resp.data.apellidos,
        
        Direccion: resp.data.direccion,

      })

    });

  }

  CLoseDialog() {

    this.dialogRef.close(this.formCliente.value);
  }



}
