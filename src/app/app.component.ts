import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MyMsgService } from './modules/general/msgservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-bootstrap';
  footerUrl = 'https://www.ganatan.com/';
  footerLink = 'www.ganatan.com';

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
  }

  showModalAgregar(){
    console.log("Show modal agregar-->");
    this.mymsgservice.publishMessage('showModal');
  }

}