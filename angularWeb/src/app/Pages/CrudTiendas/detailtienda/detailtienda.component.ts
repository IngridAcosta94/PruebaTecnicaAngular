import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TiendaService } from 'src/Services/tienda.services';

@Component({
  selector: 'app-detailtienda',
  templateUrl: './detailtienda.component.html',
  styleUrls: ['./detailtienda.component.css']
})
export class DetailtiendaComponent {

  
  formTienda: FormGroup = new FormGroup({


    sucursal: new FormControl(""),
    
    direccion: new FormControl(""),


  });

  idTienda: number = 0;

  constructor(public serviceTienda: TiendaService, public router: Router, public snakbar: MatSnackBar,
    public dialogRef: MatDialogRef<DetailtiendaComponent>,  @Inject(MAT_DIALOG_DATA) private editID:number){

      this.idTienda = editID;

    this.formTienda = new FormGroup({


      sucursal: new FormControl(""),
      
      direccion: new FormControl(""),
      
    
  
    });

  }


  ngOnInit(): void {
    this.loadTienda();
   }



  loadTienda(){

    this.serviceTienda.getTiendaDetail(this.idTienda).subscribe(resp => {

      this.formTienda.patchValue({

        sucursal: resp.data.sucursal,
      
        direccion: resp.data.direccion,
      
      });

    });

  }

  CLoseDialog() {

    this.dialogRef.close(this.formTienda.value);
  }



}
