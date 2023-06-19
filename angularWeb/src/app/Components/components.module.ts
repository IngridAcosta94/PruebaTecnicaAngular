import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from 'src/app/Components/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/Components/navbar/navbar.component';
import { FooterComponent } from 'src/app/Components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTreeModule
    // NgbModule,
    // MatButtonModule,
    // MatDialogModule,
    // MatInputModule,
    // MatFormFieldModule,
    // AngularSvgIconModule,
    // MatIconModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
