import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TiendaService } from 'src/Services/tienda.services';

@Component({
  selector: 'app-createtienda',
  templateUrl: './createtienda.component.html',
  styleUrls: ['./createtienda.component.css']
})
export class CreatetiendaComponent {

  formTienda: FormGroup = new FormGroup({


    sucursal: new FormControl(""),
    
    direccion: new FormControl(""),


  });


  constructor(public serviceTienda: TiendaService, public router: Router, public snakbar: MatSnackBar,
    public dialogRef: MatDialogRef<CreatetiendaComponent>,  @Inject(MAT_DIALOG_DATA) private editID:number){


      

    this.formTienda = new FormGroup({


      sucursal: new FormControl(""),
      
      direccion: new FormControl(""),
      
    
  
    });

  }


  ngOnInit(): void {
  
   }


  CLoseDialog() {

    this.dialogRef.close(this.formTienda.value);
  }


}
