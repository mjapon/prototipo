import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  gotoBusqueda(){
    this.router.navigate(['gestion', {}]);
  }

  goto(level:number){
    if (level===1){
      this.router.navigate(['niveles'], {});
    }
    else{
      this.router.navigate(['home'], {});
    }

  }


}
