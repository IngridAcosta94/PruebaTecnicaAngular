import { Component } from '@angular/core';
import { MatDialog, MatDialogState } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Articulo, ArticuloResponse } from 'src/Interfaces/articulo.interfaces';
import { ArticuloService } from 'src/Services/articulo.services';
import { EditarticuloComponent } from '../editarticulo/editarticulo.component';
import { DetailarticuloComponent } from '../detailarticulo/detailarticulo.component';
import { DeletearticuloComponent } from '../deletearticulo/deletearticulo.component';
import { CreatearticuloComponent } from '../createarticulo/createarticulo.component';

@Component({
  selector: 'app-indexarticulo',
  templateUrl: './indexarticulo.component.html',
  styleUrls: ['./indexarticulo.component.css']
})
export class IndexarticuloComponent {

  articulos: ArticuloResponse[] = [];

constructor(public articuloService: ArticuloService,  private dialog: MatDialog,public snakbar: MatSnackBar, ){

  this.articulos = [];


}


loadArticulos(){

  this.articuloService.getArticulos().subscribe(resp=>{

    this.articulos = resp.data;

  });

}

findArticulo(e: any) {
    if (e.target.value) {
      //console.log(e.target.value)
      this.articulos = this.articulos.filter((t) =>
        t.codigo!.toLowerCase().includes(
          e.target.value.toString().toLowerCase()
        )
      );
      return;
    }
    this.loadArticulos();
  }


  isLoginDialogOpen: boolean = false;
  openDialogCreate(): void {

    if (this.isLoginDialogOpen) {
      return;
    }

    this.isLoginDialogOpen = true;

    const dialogRef = this.dialog.open(CreatearticuloComponent, {
      width: 'auto',
      height: 'auto',
      data: "",
    });
    if (dialogRef.getState() === MatDialogState.OPEN) {
    }
    dialogRef.afterClosed().subscribe((res: Articulo) => {
      this.isLoginDialogOpen = false;
      console.log(res)
      if (res) {

        this.articuloService.registroArticulo(res).subscribe(resp=>{
       
          this.snakbar.open("Articulo registrado con exito...", "", {
            duration: 3000,
          });
          this.loadArticulos();
      
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

    const dialogRef = this.dialog.open(DeletearticuloComponent, {
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

        this.articuloService.deleteArticulo(res).subscribe(resp=>{
       
          this.snakbar.open("Articulo eliminado con exito...", "", {
            duration: 3000,
          });
          this.loadArticulos();
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

    const dialogRef = this.dialog.open(EditarticuloComponent, {
      width: 'auto',
      height: 'auto',
      data: Id,
    });
    if (dialogRef.getState() === MatDialogState.OPEN) {
    }
    dialogRef.afterClosed().subscribe((res: Articulo) => {
      this.isLoginDialogOpen = false;
      console.log(res)

      if (res) {

        this.articuloService.editArticulo(Id, res).subscribe(resp=>{
       
          this.snakbar.open("Articulo Editado con exito...", "", {
            duration: 3000,
          });
          this.loadArticulos();
      
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

    const dialogRef = this.dialog.open(DetailarticuloComponent, {
      width: 'auto',
      height: 'auto',
      data: Id,
    });
    if (dialogRef.getState() === MatDialogState.OPEN) {
    }
    dialogRef.afterClosed().subscribe((res: Articulo) => {
      this.isLoginDialogOpen = false;
      console.log(res)

      if (res) {

      
       
      } else {
        this.isLoginDialogOpen = false;
      }
    });
  }

  ngOnInit(): void {
   this.loadArticulos();
  }

}
