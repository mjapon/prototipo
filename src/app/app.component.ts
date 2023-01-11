import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MyMsgService } from './modules/general/msgservice';
import { AlertsComponent } from './modules/application/example-bootstrap/alerts/items.component';

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

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private mymsgservice:MyMsgService) {
  }

  ngOnInit(): void {
    
    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }

    this.mymsgservice.source.subscribe(msg=>{      
      if (msg.startsWith("pantalla")){
        this.pantalla = msg.split("-")[1];        
      }
      else if(msg.startsWith("level")){
        this.level = parseInt(msg.split("-")[1]);        
      }
      console.log("Valor de pantalla es:", this.pantalla);
      
    });
  }

  showModalAgregar(){
    console.log("Show modal agregar-->");
    this.mymsgservice.publishMessage('showModal');
  }

  showModalCrear(){
    console.log("Show modal crear-->");
    this.mymsgservice.publishMessage('showModalCrear');
  }

  crearNivel(nivel:number){
    let messgae= 'createlevel-'+nivel;
    this.mymsgservice.publishMessage(messgae);
  }

  gotoFeatures(){
    alert('go to features');

  }
  gotoCatalogos(){
    alert('goto catalogos');
  }

}