import { Routes } from '@angular/router';
import { IndexclientComponent } from 'src/app/Pages/CrudClientes/indexclient/indexclient.component';
import{RegisteruserComponent} from 'src/app/Pages/registeruser/registeruser.component';
import{HomeComponent} from 'src/app/Pages/home/home.component';
import{IndexarticuloComponent} from 'src/app/Pages/CrudArticulos/indexarticulo/indexarticulo.component';
import{IndextiendaComponent} from 'src/app/Pages/CrudTiendas/indextienda/indextienda.component';
import{IndexclientearticuloComponent} from 'src/app/Pages/CrudClienteArticulo/indexclientearticulo/indexclientearticulo.component';
import{AsignararticulotiendaComponent} from 'src/app/Pages/CrudArticuloTienda/asignararticulotienda/asignararticulotienda.component';
import{SelectarticuloComponent} from 'src/app/Pages/CrudArticuloTienda/selectarticulo/selectarticulo.component';

export const LayoutRoutes: Routes = [

  { path: 'indexclient', component: IndexclientComponent },
  { path: 'registeruser', component: RegisteruserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'indexarticulo', component: IndexarticuloComponent },
  { path: 'indextienda', component: IndextiendaComponent },
  { path: 'indexclientearticulo', component: IndexclientearticuloComponent },
  { path: 'asignararticulotienda', component: AsignararticulotiendaComponent },
  { path: 'selectarticulo/:id', component: SelectarticuloComponent },
 
];
