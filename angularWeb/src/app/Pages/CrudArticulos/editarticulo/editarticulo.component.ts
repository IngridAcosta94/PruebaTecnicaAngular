import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/Services/articulo.services';

@Component({
  selector: 'app-editarticulo',
  templateUrl: './editarticulo.component.html',
  styleUrls: ['./editarticulo.component.css']
})
export class EditarticuloComponent {

  formArticulo: FormGroup = new FormGroup({


    codigo: new FormControl(""),
    
    descripcion: new FormControl(""),
    
    precio: new FormControl(""),
     
    stock: new FormControl("")

  });

  idArticulo: number = 0;

  constructor(public serviceArticulo: ArticuloService, public router: Router, public snakbar: MatSnackBar,
    public dialogRef: MatDialogRef<EditarticuloComponent>,  @Inject(MAT_DIALOG_DATA) private editID:number){

      this.idArticulo = editID;

      this.formArticulo = new FormGroup({


        codigo: new FormControl(""),
        
        descripcion: new FormControl(""),
        
        precio: new FormControl(""),
         
        stock: new FormControl("")
    
      });

  }


  ngOnInit(): void {
    this.loadCliente();
   }



  loadCliente(){

    this.serviceArticulo.getArticuloDetail(this.idArticulo).subscribe(resp => {

      this.formArticulo.patchValue({

        codigo: resp.data.codigo,
      
        descripcion: resp.data.descripcion,
        
        precio: resp.data.precio,

        stock: resp.data.stock,

      })

    });

  }

  CLoseDialog() {

    this.dialogRef.close(this.formArticulo.value);
  }



}
