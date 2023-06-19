
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from 'src/services/login.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIcon } from '@angular/material/icon';



interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  userName: string = "";
  showFiller = false;
  isLoggedIn = false;
  constructor(private router: Router, private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    // private spinner: NgxSpinnerService
  ) {

    this.matIconRegistry.addSvgIcon(
      "hamburger",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svg/hamburger/hamburgerblan.svg")

    );
    this.matIconRegistry.addSvgIcon(
      "logout",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/hamburger/logOut.svg')

    );
    this.matIconRegistry.addSvgIcon(
      "home",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/hamburger/home.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "person",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/hamburger/person.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "settings",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/hamburger/settings.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "home2",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/hamburger/homecopy.svg')
    )


  }


  ngOnInit() {
    this.getUserName();
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  getUserName() {
    //Con esto vas a obtener los datos del usuario
    //const login = JSON.parse(sessionStorage.getItem('auth-user'))
    //const user = login.user
    //this.userName = user.name

    //if (this.authService.getToken()) {
    //  this.isLoggedIn = true;
    //  this.userName =
    //    this.authService.getUser2()[
    //    'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
    //    ];
    //}
  }

  menuValidations() {
    //const role = this.authService.getUser2()['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    //cajero

    //if (role === 'Cajero') {
    //  this.router.navigate([`${'homecashier'}`]);
    //  return
    //}

    ////vendedor
    //if (role === 'Vendedor') {
    //  this.router.navigate([`${'homeseller'}`]);
    //  return
    //}

    ////valuador
    //if (role === 'Valuador') {
    //  this.router.navigate([`${'homeappraiser'}`]);
    //  return
    //}

    ////encargado
    //if (role === 'Encargado de Sucursal') {
    //  this.router.navigate([`${'homemanager'}`]);
    //  return
    //}


  }
  isSideNavCollapsed = false;
  screenWidth = window.innerHeight;
  getBodyClass(): string {
    let margin = 'margin-left: 80px';
    if (this.isSideNavCollapsed && this.screenWidth > 768) {
      margin = "margin-left: 265px"
    } else if (this.isSideNavCollapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      margin = "margin-left: 265px"
    }
    return margin + '!important;transition: all .5s ease;';
  }


  onToggleSideNav({ collapsed, screenWidth }: SideNavToggle): void {
    console.warn({ collapsed, screenWidth })
    this.screenWidth = screenWidth;
    this.isSideNavCollapsed = collapsed
  }
}
