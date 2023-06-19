import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/Services/articulo.services';

@Component({
  selector: 'app-createarticulo',
  templateUrl: './createarticulo.component.html',
  styleUrls: ['./createarticulo.component.css']
})
export class CreatearticuloComponent {

  formArticulo: FormGroup = new FormGroup({


    codigo: new FormControl(""),
    
    descripcion: new FormControl(""),
    
    precio: new FormControl(""),
     
    stock: new FormControl("")

  });
  


  constructor(public servicecliente: ArticuloService, public router: Router, public snakbar: MatSnackBar,
    public dialogRef: MatDialogRef<CreatearticuloComponent>){

      this.formArticulo = new FormGroup({


        codigo: new FormControl(""),
        
        descripcion: new FormControl(""),
        
        precio: new FormControl(""),
         
        stock: new FormControl("")
    
      });
    
  };


  CLoseDialog() {
    this.dialogRef.close(this.formArticulo.value);
  }




}
