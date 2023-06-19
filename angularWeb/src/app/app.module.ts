import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app.routing'
import { AuthlayoutComponent } from 'src/app/Layouts/authlayout/authlayout.component';
import { LayoutComponent } from 'src/app/Layouts/layout/layout.component';
import { ComponentsModule } from 'src/app/Components/components.module';
// import { AlertModule, GridModule } from '@coreui/angular';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
//import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from '@angular/material/table';
//import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { fas } from '@fortawesome/free-solid-svg-icons';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
//import { NgxPaginationModule } from 'ngx-pagination';
// import { NgxSpinnerModule } from "ngx-spinner";
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




//import { RegisteruserComponent } from './pages/registeruser/registeruser.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthlayoutComponent,
    LayoutComponent,
  

  ],
  imports: [
    //RouterModule,
    //RouterModule.forRoot(appRoutes),
    //BrowserModule, 

    HttpClientModule,
     BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    RouterModule,
    ComponentsModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTreeModule,
    MatExpansionModule,
    CdkAccordionModule,
    FontAwesomeModule
    //AgGridModule

  ],
   providers: [
     {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true },
  }
    ,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpRequestInterceptor,
    //   multi: true,
    // },

    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true, disableClose: true, } }],
  bootstrap: [AppComponent],

})
export class AppModule { }
