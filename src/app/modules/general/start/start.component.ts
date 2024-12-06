import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(private router: Router) { }

  gotoBusqueda() {
    this.router.navigate(['gestion', {}]);
  }

  goto(level: number) {
    if (level === 1) {
      this.router.navigate(['niveles'], {});
    }
    else {
      this.router.navigate(['home'], {});
    }
  }

  gotoCatalogos() {
    this.router.navigate(['catalogos'], {});
  }

  gotoAdminCatalogos() {

    this.router.navigate(['admctgs'], {});
  }

  gotoSoporte() {
    this.router.navigate(['soporte'], {});
  }

  gotoCoupons() {
    this.router.navigate(['coupons'], {});
  }
}
