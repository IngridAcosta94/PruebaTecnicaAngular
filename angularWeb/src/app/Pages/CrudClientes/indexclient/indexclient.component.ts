import { Component } from '@angular/core';
import { MatDialog, MatDialogState } from '@angular/material/dialog';
import { Cliente, ClienteResponse } from 'src/Interfaces/cliente.interfaces';
import { ClienteService } from 'src/Services/clientes.services';
import { CreateclientComponent } from '../createclient/createclient.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteclientComponent } from '../deleteclient/deleteclient.component';
import { UpdateclientComponent } from '../updateclient/updateclient.component';
import { DetailclientComponent } from '../detailclient/detailclient.component';


@Component({
  selector: 'app-indexclient',
  templateUrl: './indexclient.component.html',
  styleUrls: ['./indexclient.component.css']
})
export class IndexclientComponent {


 clientes: ClienteResponse[] = [];

constructor(public clienteService: ClienteService,  private dialog: MatDialog,public servicecliente:ClienteService,public snakbar: MatSnackBar, ){

  this.clientes = [];


}


loadClients(){

  this.clienteService.getClients().subscribe(resp=>{

    this.clientes = resp.data;

  });

}

  findCliente(e: any) {
    if (e.target.value) {
      //console.log(e.target.value)
      this.clientes = this.clientes.filter((t) =>
        t.nombre.toLowerCase().includes(
          e.target.value.toString().toLowerCase()
        )
      );
      return;
    }
    this.loadClients();
  }


  isLoginDialogOpen: boolean = false;
  openDialogCreate(): void {

    if (this.isLoginDialogOpen) {
      return;
    }

    this.isLoginDialogOpen = true;

    const dialogRef = this.dialog.open(CreateclientComponent, {
      width: 'auto',
      height: 'auto',
      data: "",
    });
    if (dialogRef.getState() === MatDialogState.OPEN) {
    }
    dialogRef.afterClosed().subscribe((res: Cliente) => {
      this.isLoginDialogOpen = false;
      console.log(res)
      if (res) {

        this.servicecliente.registroCliente(res).subscribe(resp=>{
       
          this.snakbar.open("Cliente registrado con exito...", "", {
            duration: 3000,
          });
          this.loadClients();
      
        });
        this.isLoginDialogOpen = false;
      
      } else {
        this.isLoginDialogOpen = false;
      }
    });
  }

  openDialogDeleted(Id: number): void {

    if (this.isLoginDialogOpen) {
      return;
    }

    this.isLoginDialogOpen = true;

    const dialogRef = this.dialog.open(DeleteclientComponent, {
      width: 'auto',
      height: 'auto',
      data: Id,
    });
    if (dialogRef.getState() === MatDialogState.OPEN) {
    }
    dialogRef.afterClosed().subscribe((res: number) => {
      this.isLoginDialogOpen = false;
      console.log(res)

      if (res) {

        this.servicecliente.deleteClient(res).subscribe(resp=>{
       
          this.snakbar.open("Cliente eliminado con exito...", "", {
            duration: 3000,
          });
          this.loadClients();
          this.isLoginDialogOpen = false;
        });
       
      } else {
        this.isLoginDialogOpen = false;
      }
    });
  }




  //UpdateclientComponent
  openDialogEdit(Id: number): void {

    if (this.isLoginDialogOpen) {
      return;
    }

    this.isLoginDialogOpen = true;

    const dialogRef = this.dialog.open(UpdateclientComponent, {
      width: 'auto',
      height: 'auto',
      data: Id,
    });
    if (dialogRef.getState() === MatDialogState.OPEN) {
    }
    dialogRef.afterClosed().subscribe((res: Cliente) => {
      this.isLoginDialogOpen = false;
      console.log(res)

      if (res) {

        this.servicecliente.editClient(Id, res).subscribe(resp=>{
       
          this.snakbar.open("Cliente editado con exito...", "", {
            duration: 3000,
          });
          this.loadClients();
      
        });
        this.isLoginDialogOpen = false;
      } else {
        this.isLoginDialogOpen = false;
      }
    });
    
  }

  openDialogDetail(Id: number): void {

    if (this.isLoginDialogOpen) {
      return;
    }

    this.isLoginDialogOpen = true;

    const dialogRef = this.dialog.open(DetailclientComponent, {
      width: 'auto',
      height: 'auto',
      data: Id,
    });
    if (dialogRef.getState() === MatDialogState.OPEN) {
    }
    dialogRef.afterClosed().subscribe((res: Cliente) => {
      this.isLoginDialogOpen = false;
      console.log(res)

      if (res) {

      
       
      } else {
        this.isLoginDialogOpen = false;
      }
    });
  }

  ngOnInit(): void {
   this.loadClients();
  }

}
