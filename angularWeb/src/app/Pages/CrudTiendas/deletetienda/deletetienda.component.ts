import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TiendaService } from 'src/Services/tienda.services';

@Component({
  selector: 'app-deletetienda',
  templateUrl: './deletetienda.component.html',
  styleUrls: ['./deletetienda.component.css']
})
export class DeletetiendaComponent {

  idTienda: number = 0;

  constructor( private service: TiendaService,
    private dialogRef:MatDialogRef<DeletetiendaComponent>,
    @Inject(MAT_DIALOG_DATA) private editID:number){

      this.idTienda = editID;

  }

}
