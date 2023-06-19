import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from 'src/app/Layouts/layout/layout.module';
//import { CrudPuestosTComponent } from './Pages/crud-puestos-t/crud-puestos-t.component';
import { AuthlayoutModule } from 'src/app/Layouts/authlayout/authlayout.module'
import{LayoutComponent} from 'src/app/Layouts/layout/layout.component';
import{AuthlayoutComponent} from 'src/app/Layouts/authlayout/authlayout.component'

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/Layouts/layout/layout.module').then(m => m.LayoutModule)
      }
    ]
  },
  {
    path: '',
    component: AuthlayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/Layouts/authlayout/authlayout.module').then(m => m.AuthlayoutModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  },




];

@NgModule({
  imports:
   [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: []
})
export class AppRoutingModule { }




