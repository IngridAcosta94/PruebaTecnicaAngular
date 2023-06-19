import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/Services/articulo.services';
import { Articulo } from '../../../../Interfaces/articulo.interfaces';

@Component({
  selector: 'app-detailarticulo',
  templateUrl: './detailarticulo.component.html',
  styleUrls: ['./detailarticulo.component.css']
})
export class DetailarticuloComponent {


  formArticulo: FormGroup = new FormGroup({


    codigo: new FormControl(""),
    
    descripcion: new FormControl(""),
    
    precio: new FormControl(""),
     
    stock: new FormControl("")

  });

  idArticulo: number = 0;

  constructor(public servicecArticulo: ArticuloService, public router: Router, public snakbar: MatSnackBar,
    public dialogRef: MatDialogRef<DetailarticuloComponent>,  @Inject(MAT_DIALOG_DATA) private editID:number){

      this.idArticulo = editID;

    this.formArticulo = new FormGroup({


      codigo: new FormControl(""),
      
      descripcion: new FormControl(""),
      
      precio: new FormControl(""),
       
      stock: new FormControl("")
  
    });
  

  }


  ngOnInit(): void {
    this.loadArticulo();
   }



   loadArticulo(){

    this.servicecArticulo.getArticuloDetail(this.idArticulo).subscribe(resp => {

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
