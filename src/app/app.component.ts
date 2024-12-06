import {Component, OnInit} from '@angular/core';
import {Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {MyMsgService} from './modules/general/msgservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-bootstrap';
  footerUrl = 'https://www.ganatan.com/';
  footerLink = 'www.ganatan.com';
  pantalla = 'start';
  level = -1;

  titulo = 'Gestión de cupones personalizados';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router,
    private mymsgservice: MyMsgService) {
  }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove('show');
          }
        }
      }
    }

    this.mymsgservice.source.subscribe(msg => {
      if (msg.startsWith('pantalla')) {
        this.pantalla = msg.split('-')[1];
      } else if (msg.startsWith('level')) {
        this.level = parseInt(msg.split('-')[1]);
      }
      console.log('Valor de pantalla es:', this.pantalla);
      if (this.pantalla === 'catalogos') {
        this.titulo = 'Administración de características';
      } else if (this.pantalla === 'adminctg') {
        this.titulo = 'Administración de tipos de catálogos';
      } else if (this.pantalla === 'soporte') {
        this.titulo = 'Soporte de artículos';
      }

    });
  }

  showModalAgregar() {
    console.log('Show modal agregar-->');
    this.mymsgservice.publishMessage('showModal');
  }

  showModalCrear() {
    console.log('Show modal crear-->');
    this.mymsgservice.publishMessage('showModalCrear');
  }

  crearNivel(nivel: number) {
    const messgae = 'createlevel-' + nivel;
    this.mymsgservice.publishMessage(messgae);
  }

  gotoFeatures() {
    this.mymsgservice.publishMessage('showNewFeature');
  }

  gotoCatalogos() {
    this.mymsgservice.publishMessage('showNewCatalogo');
  }

  showCarga() {
    this.mymsgservice.publishMessage('showCargaPlantilla');
  }

  showCargaCtgs() {
    this.mymsgservice.publishMessage('showCargaCtgs');
  }

  showRevisionRapida() {
    this.mymsgservice.publishMessage('review');
    this.router.navigate(['review']);
  }

  nothing() {

  }

}
