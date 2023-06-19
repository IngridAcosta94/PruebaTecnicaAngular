import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloResponse, ArticuloTiendaPost, ArticuloTiendaResponse } from 'src/Interfaces/articulo.interfaces';
import { TiendaResponse } from 'src/Interfaces/tienda.interface';
import { ArticuloService } from 'src/Services/articulo.services';
import { TiendaService } from 'src/Services/tienda.services';

@Component({
  selector: 'app-articulosdetienda',
  templateUrl: './articulosdetienda.component.html',
  styleUrls: ['./articulosdetienda.component.css']
})
export class ArticulosdetiendaComponent {


  
  articulos: ArticuloTiendaResponse[] = [];
  articulosTienda: ArticuloTiendaResponse[] = [];
  articuloTienda: ArticuloTiendaPost = {
    idArticulo: 0,
     idTienda: 0
  };

  articulotiendas: ArticuloTiendaPost[] = [];
  formsearch: FormGroup = new FormGroup({

    name: new FormControl(""),

  });

  tienda: TiendaResponse = {

    
    id:0,
    sucursal: "",
    direccion:"",

  }

  idTienda: number = 0;


  constructor(public servicecArticulo: ArticuloService, public router: Router, public snakbar: MatSnackBar,
    public dialogRef: MatDialogRef<ArticulosdetiendaComponent>,  @Inject(MAT_DIALOG_DATA) private editID:number,public tiendaService: TiendaService,){


      this.idTienda = editID;
    this.articulos = [];
    this.articulosTienda = [];
    this.articuloTienda;
    this.articulotiendas = [];

  }

  ngOnInit(): void {
    this.loadArticulo();
   }
  

  loadArticulo(){

    
    this.servicecArticulo.getArticuloByTienda(this.idTienda).subscribe(resp =>{

      this.articulos = resp.data;

    });

    this.tiendaService.getTiendaDetail(this.idTienda).subscribe(resp=>{


      this.tienda = resp.data;

    });
   

  }


  findArticulo(e: any){

    if (e.target.value) {
      //console.log(e.target.value)
      this.articulos = this.articulos.filter((t) =>
        t.codigoArticulo!.toLowerCase().includes(
          e.target.value.toString().toLowerCase()
        )
      );
      return;
    }
    this.loadArticulo();

  }


  



}
