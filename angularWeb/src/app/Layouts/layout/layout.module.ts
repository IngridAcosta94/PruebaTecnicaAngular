import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, VERSION } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
//import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CurrencyPipe } from '@angular/common';
import { LayoutRoutes } from 'src/app/Layouts/layout/layout.routing'
import {RegisteruserComponent} from 'src/app/Pages/registeruser/registeruser.component';
import{HomeComponent} from 'src/app/Pages/home/home.component';
import{IndexarticuloComponent} from 'src/app/Pages/CrudArticulos/indexarticulo/indexarticulo.component';
import{IndextiendaComponent} from 'src/app/Pages/CrudTiendas/indextienda/indextienda.component';
import{IndexclientearticuloComponent} from 'src/app/Pages/CrudClienteArticulo/indexclientearticulo/indexclientearticulo.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IndexclientComponent } from 'src/app/Pages/CrudClientes/indexclient/indexclient.component';
import{CreateclientComponent} from 'src/app/Pages/CrudClientes/createclient/createclient.component';
import{DeleteclientComponent} from 'src/app/Pages/CrudClientes/deleteclient/deleteclient.component';
import{UpdateclientComponent} from 'src/app/Pages/CrudClientes/updateclient/updateclient.component';
import{DetailclientComponent} from 'src/app/Pages/CrudClientes/detailclient/detailclient.component';
import{CreatearticuloComponent} from 'src/app/Pages/CrudArticulos/createarticulo/createarticulo.component';
import{EditarticuloComponent} from 'src/app/Pages/CrudArticulos/editarticulo/editarticulo.component';
import{DetailarticuloComponent} from 'src/app/Pages/CrudArticulos/detailarticulo/detailarticulo.component';
import{DeletearticuloComponent} from 'src/app/Pages/CrudArticulos/deletearticulo/deletearticulo.component';
import{AsignararticulotiendaComponent} from 'src/app/Pages/CrudArticuloTienda/asignararticulotienda/asignararticulotienda.component';
import{SelectarticuloComponent} from 'src/app/Pages/CrudArticuloTienda/selectarticulo/selectarticulo.component';
import{DeletetiendaComponent} from 'src/app/Pages/CrudTiendas/deletetienda/deletetienda.component';
import {CreatetiendaComponent} from 'src/app/Pages/CrudTiendas/createtienda/createtienda.component';
import {EdittiendaComponent} from 'src/app/Pages/CrudTiendas/edittienda/edittienda.component';
import {DetailtiendaComponent} from 'src/app/Pages/CrudTiendas/detailtienda/detailtienda.component';
import{ArticulosdetiendaComponent} from 'src/app/Pages/CrudArticuloTienda/articulosdetienda/articulosdetienda.component';

@NgModule({
  declarations: [
    RegisteruserComponent,
    HomeComponent,
    IndexarticuloComponent,
    IndexclientearticuloComponent,
    IndextiendaComponent,
    IndexclientComponent,
    CreateclientComponent,
    DeleteclientComponent,
    DetailclientComponent,
    UpdateclientComponent,
    CreatearticuloComponent,
    EditarticuloComponent,
    DetailarticuloComponent,
    DeletearticuloComponent,
    AsignararticulotiendaComponent,
    SelectarticuloComponent,
    CreatetiendaComponent,
    DetailtiendaComponent,
    EdittiendaComponent,
    DeletetiendaComponent,
    ArticulosdetiendaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatTooltipModule,
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTreeModule,
    CdkAccordionModule,
    FontAwesomeModule
   

  ],
  providers: [
    //AuthGuardService,
    CurrencyPipe,
   // ErrorService,

    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },

    },

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule {
  constructor(library: FaIconLibrary) {
   library.addIconPacks(fas);
  }
}


