import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  model: any[] = [

  ];
  menus: any[] = [
    {
      label: 'Personajes',
      key: "personajes",
      icon: 'pi pi-home',
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-home',
          routerLink: ['/personajes'],
        }
      ]
    },
    {
      label: 'Personaje',
      key: "usuarios",
      icon: 'pi pi-fw pi-compass',
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-external-link',
          routerLink: ['/personaje'],
        },
      ]
    },
    {
      label: 'Residentes',
      key: "residentes",
      icon: 'pi pi-fw pi-compass',
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-external-link',
          routerLink: ['/location'],
        },
      ]
    },
  ]
  ngOnInit() {


    let permisos: any = {
      "admin":['personajes','usuarios','residentes'],
    }
    this.model = [];


    let usuarioInfo = JSON.parse(localStorage.getItem("userData") || "{}")
    usuarioInfo.role = "admin";

    this.menus.forEach((elemento) => {
      // console.log(elemento)
      if (permisos[usuarioInfo?.role].includes(elemento.key)) {
        this.model.push(elemento)
      }
    })

  }
}
