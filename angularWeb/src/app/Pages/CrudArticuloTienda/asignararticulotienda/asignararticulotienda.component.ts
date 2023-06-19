import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SelectarticuloComponent } from '../selectarticulo/selectarticulo.component';
import { MatDialog, MatDialogState } from '@angular/material/dialog';
import { Articulo } from 'src/Interfaces/articulo.interfaces';
import { TiendaService } from 'src/Services/tienda.services';
import { Tienda, TiendaResponse } from 'src/Interfaces/tienda.interface';
import { ArticulosdetiendaComponent } from '../articulosdetienda/articulosdetienda.component';

@Component({
  selector: 'app-asignararticulotienda',
  templateUrl: './asignararticulotienda.component.html',
  styleUrls: ['./asignararticulotienda.component.css']
})
export class AsignararticulotiendaComponent {


  formsearch: FormGroup = new FormGroup({

    name: new FormControl(""),

  });

  formTiendas = this.fb.group({
    tiendas: this.fb.array([])
  });

  sucursales: TiendaResponse[] = [];

constructor(private dialog: MatDialog, public fb: FormBuilder, public tiendaService: TiendaService){

  this.sucursales = [];

}

ngOnInit(): void {
  this.loadSucursal();
 }


loadSucursal(){

  this.tiendaService.getTiendas().subscribe(resp =>{

    this.sucursales = resp.data;



  });


}

  findSucursal(e: any){


    if (e.target.value) {
      //console.log(e.target.value)
      this.sucursales = this.sucursales.filter((t) =>
        t.sucursal!.toLowerCase().includes(
          e.target.value.toString().toLowerCase()
        )
      );
      return;
    }
    this.loadSucursal();


  }



  Save(){


  }

  isLoginDialogOpen: boolean = false;
  openDialogSelectArticulo(): void {
    debugger
    if (this.isLoginDialogOpen) {
      return;
    }

    this.isLoginDialogOpen = true;

    const dialogRef = this.dialog.open(SelectarticuloComponent, {
      width: 'auto',
      height: 'auto',
      data: "",
    });
    if (dialogRef.getState() === MatDialogState.OPEN) {
    }
    dialogRef.afterClosed().subscribe((res: Articulo[]) => {
      this.isLoginDialogOpen = false;
      console.log(res)

      if (res) {

      
       
      } else {
        this.isLoginDialogOpen = false;
      }
    });
  }


  openDialogArticulos(Id: number): void {

    if (this.isLoginDialogOpen) {
      return;
    }

    this.isLoginDialogOpen = true;

    const dialogRef = this.dialog.open(ArticulosdetiendaComponent, {
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



}
