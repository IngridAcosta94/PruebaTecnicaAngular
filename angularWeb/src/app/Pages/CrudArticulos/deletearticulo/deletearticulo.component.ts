import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArticuloService } from 'src/Services/articulo.services';

@Component({
  selector: 'app-deletearticulo',
  templateUrl: './deletearticulo.component.html',
  styleUrls: ['./deletearticulo.component.css']
})
export class DeletearticuloComponent {

  idArticulo: number = 0;

  constructor( private service: ArticuloService,
    private dialogRef:MatDialogRef<DeletearticuloComponent>,
    @Inject(MAT_DIALOG_DATA) private editID:number){

      this.idArticulo = editID;

  }


}
