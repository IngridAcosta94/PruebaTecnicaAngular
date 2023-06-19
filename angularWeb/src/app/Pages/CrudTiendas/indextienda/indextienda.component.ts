import { Component } from '@angular/core';
import { MatDialog, MatDialogState } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tienda, TiendaResponse } from 'src/Interfaces/tienda.interface';
import { TiendaService } from 'src/Services/tienda.services';
import { CreatetiendaComponent } from '../createtienda/createtienda.component';
import { DeletetiendaComponent } from '../deletetienda/deletetienda.component';
import { DetailtiendaComponent } from '../detailtienda/detailtienda.component';
import { EdittiendaComponent } from '../edittienda/edittienda.component';

@Component({
  selector: 'app-indextienda',
  templateUrl: './indextienda.component.html',
  styleUrls: ['./indextienda.component.css']
})
export class IndextiendaComponent {


  tiendas: TiendaResponse[] = [];

  constructor(public tiendaService: TiendaService,  private dialog: MatDialog,public snakbar: MatSnackBar, ){
  
    this.tiendas = [];
  
  
  }
  
  
  loadTiendas(){
  
    this.tiendaService.getTiendas().subscribe(resp=>{
  
      this.tiendas = resp.data;
  
    });
  
  }
  
  findTienda(e: any) {
      if (e.target.value) {
        //console.log(e.target.value)
        this.tiendas = this.tiendas.filter((t) =>
          t.sucursal.toLowerCase().includes(
            e.target.value.toString().toLowerCase()
          )
        );
        return;
      }
      this.loadTiendas();
    }
  
  
    isLoginDialogOpen: boolean = false;
    openDialogCreate(): void {
    
      if (this.isLoginDialogOpen) {
        return;
      }
  
      this.isLoginDialogOpen = true;
  
      const dialogRef = this.dialog.open(CreatetiendaComponent, {
        width: 'auto',
        height: 'auto',
        data: "",
      });
      if (dialogRef.getState() === MatDialogState.OPEN) {
      }
      dialogRef.afterClosed().subscribe((res: Tienda) => {
        this.isLoginDialogOpen = false;
        console.log(res)
        if (res) {
  
          this.tiendaService.registroTienda(res).subscribe(resp=>{
         
            this.snakbar.open("Tienda registrado con exito...", "", {
              duration: 3000,
            });
            this.loadTiendas();
        
          });
          this.isLoginDialogOpen = false;
        
        } else {
          this.isLoginDialogOpen = false;
        }

        this.isLoginDialogOpen = false;
      });
    }
  
    openDialogDeleted(Id: number): void {

      if (this.isLoginDialogOpen) {
        return;
      }
  
      this.isLoginDialogOpen = true;
  
      const dialogRef = this.dialog.open(DeletetiendaComponent, {
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
  
          this.tiendaService.deleteTienda(res).subscribe(resp=>{
         
            this.snakbar.open("Tienda eliminada con exito...", "", {
              duration: 3000,
            });
            this.loadTiendas();
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
  
      const dialogRef = this.dialog.open(EdittiendaComponent, {
        width: 'auto',
        height: 'auto',
        data: Id,
      });
      if (dialogRef.getState() === MatDialogState.OPEN) {
      }
      dialogRef.afterClosed().subscribe((res: Tienda) => {
        this.isLoginDialogOpen = false;
        console.log(res)
  
        if (res) {
  
          this.tiendaService.editTienda(Id, res).subscribe(resp=>{
         
            this.snakbar.open("Tienda editada con exito...", "", {
              duration: 3000,
            });
            this.loadTiendas();
        
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
  
      const dialogRef = this.dialog.open(DetailtiendaComponent, {
        width: 'auto',
        height: 'auto',
        data: Id,
      });
      if (dialogRef.getState() === MatDialogState.OPEN) {
      }
      dialogRef.afterClosed().subscribe((res: Tienda) => {
        this.isLoginDialogOpen = false;
        console.log(res)
  
        if (res) {
  
        
         
        } else {
          this.isLoginDialogOpen = false;
        }
      });
    }
  
    ngOnInit(): void {
     this.loadTiendas();
    }
  

}
