import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from 'src/app/Pages/login/login.component';
import { AuthLayoutRoutes } from 'src/app/Layouts/authlayout/authlayout.routing';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; INSTALAR
// import { NgxSpinnerModule } from "ngx-spinner";
//import { NgxPaginationModule } from 'ngx-pagination'; INSTALAR


@NgModule({
  declarations: [
    LoginComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    // NgxSpinnerModule,
    // NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
   // NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatSliderModule,
    //FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    //MatDialogModule
    MatSnackBarModule,
   
  ],

})
export class AuthlayoutModule { }
