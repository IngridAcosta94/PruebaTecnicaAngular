import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from 'src/Services/clientes.services';

@Component({
  selector: 'app-deleteclient',
  templateUrl: './deleteclient.component.html',
  styleUrls: ['./deleteclient.component.css']
})
export class DeleteclientComponent {

  idClient: number = 0;

  constructor( private service:ClienteService,
    private dialogRef:MatDialogRef<DeleteclientComponent>,
    @Inject(MAT_DIALOG_DATA) private editID:number){

      this.idClient = editID;

  }

}
