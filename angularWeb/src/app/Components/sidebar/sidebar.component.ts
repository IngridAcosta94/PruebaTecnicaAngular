import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

interface treeNodes {
  option: string;
  icon: string;
  path: string;
  children?: treeNodes[];
}

interface ExampleFlatNode {
  expandable: boolean;
  option: string;
  level: number;
  path: string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  TREE_DATA: treeNodes[] = [
    {
      option: 'Catálogos',
      icon: 'home2',
      children:
        [
          { path: '/indexclients', option: 'Clientes', icon: 'customer' },
          { path: '/crudPuestosTrabajo', option: 'Puestos de trabajo', icon: 'customer' },
          { path: '/crudTipoContribucion', option: 'Tipo de contribución', icon: '' },
          { path: '/crudMarcasProdutos', option: 'Marcas de productos', icon: '' },
          { path: '/crudPropiedadesProdutos', option: 'Propiedades de un producto', icon: '' },
          { path: '/crudFamiliaProdutos', option: 'Familia de productos', icon: '' },
          { path: '/crudTiposIncidencia', option: 'Tipos de Incidencia', icon: '' },
          { path: '/crudcustomerjob', option: 'Ocupaciones de los clientes', icon: '' },
          { path: '/crudPawRules', option: 'Reglas de negocio', icon: '' },
          { path: '/indexemploye', option: 'Empleados', icon: '' }
          //  {option: 'Personal'}
        ],
      path: '',
    },

  ]
  showFiller = false;
  isLoggedIn = false;
  collapsed = false;
  screenWidth = window.innerHeight;
  //user: Payload;
  //roles: string;
  private _transformer = (node: treeNodes, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      option: node.option,
      path: node.path,
      level: level,
    }
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
    //node => node.path
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener)

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  constructor(
    private router: Router,
    //public authService: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
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
    );
    this.matIconRegistry.addSvgIcon(
      "customer",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/hamburger/black-clients.svg')
    );

    this.dataSource.data = this.TREE_DATA;

  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    this.dataSource.data = this.TREE_DATA;
    this.userforRol()
  }

  isSideNavCollapsed = false;
  // screenWidth = window.innerHeight;
  // onToggleSideNav({ collapsed, screenWidth }: SideNavToggle): void {
  //   this.screenWidth = screenWidth;
  //   this.isSideNavCollapsed = collapsed
  // }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    //this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    //this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
  userforRol() {
    //this.user = JSON.parse(sessionStorage.getItem('auth-user')) as Payload;
    //this.roles = this.user['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }
  // getBodyClass(): string {
  //   let margin = 'margin-left: 80px';
  //   if (this.isSideNavCollapsed && this.screenWidth > 768) {
  //     margin = "margin-left: 265px"
  //   } else if (this.isSideNavCollapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
  //     margin = "margin-left: 265px"
  //   }
  //   return margin + '!important;transition: all .5s ease;';
  // }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  menuValidations() {
    //const role = this.authService.getUser2()['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    ////cajero
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

    //if (role === 'Auditor') {
    //  this.router.navigate([`${'homeaudit'}`]);
    //  return
    //}
  }
}
