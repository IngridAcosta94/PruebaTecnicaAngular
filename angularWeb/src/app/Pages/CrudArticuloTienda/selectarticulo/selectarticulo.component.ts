import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo, ArticuloResponse, ArticuloTiendaPost } from 'src/Interfaces/articulo.interfaces';
import { TiendaResponse } from 'src/Interfaces/tienda.interface';
import { ArticuloService } from 'src/Services/articulo.services';
import { TiendaService } from 'src/Services/tienda.services';

@Component({
  selector: 'app-selectarticulo',
  templateUrl: './selectarticulo.component.html',
  styleUrls: ['./selectarticulo.component.css']
})
export class SelectarticuloComponent {


  articulos: ArticuloResponse[] = [];
  articulosTienda: ArticuloResponse[] = [];
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



  constructor(public router: Router,public service: ArticuloService,public tiendaService: TiendaService,public route: ActivatedRoute,public snakbar: MatSnackBar){

    this.articulos = [];
    this.articulosTienda = [];
    this.articuloTienda;
    this.articulotiendas = [];

  }

  ngOnInit(): void {
    this.loadArticulo();
   }
  

  loadArticulo(){

    this.idTienda =  parseInt(this.route.snapshot.paramMap.get("id")!);
    this.service.getArticulos().subscribe(resp =>{

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
        t.codigo.toLowerCase().includes(
          e.target.value.toString().toLowerCase()
        )
      );
      return;
    }
    this.loadArticulo();

  }

  idTienda: number = 0;

  Save(){

    this.idTienda =  parseInt(this.route.snapshot.paramMap.get("id")!);
    
    this.articulosTienda.forEach(element => {


      this.articuloTienda = {
        idArticulo: element.id!,
         idTienda: this.idTienda
      };

      this.articulotiendas.push(this.articuloTienda);
      

    });


    this.service.registroArticuloTienda(this.articulotiendas).subscribe(resp=>{

      this.snakbar.open("Asignación registrada con exito...", "", {
        duration: 3000,

      });

      this.router.navigate([`${'asignararticulotienda'}`]);

    });


  }


  selectedId: number = 0;  
  artic: ArticuloResponse[] = [];

onSelectCard(item: ArticuloResponse){

    this.selectedId = item.id!;

  

    this.articulos.forEach(element => {

      if(element.id == item.id){

        element.selected = true;

      }
      
    });


    this.articulosTienda.push(item);
    //this.customer = customer;
    //this.formT.controls.terms.clear();

  }

}
