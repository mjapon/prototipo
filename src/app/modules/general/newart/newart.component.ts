import { Component, Input, OnInit } from '@angular/core';
import { NodeService } from '../nodeservice';

@Component({
  selector: 'app-newart',
  templateUrl: './newart.component.html',
  styleUrls: ['./newart.component.css']
})
export class NewartComponent implements OnInit {

  articulos:any = [];
  @Input() delivery:any = {};

  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
  }



  loadArticulos(){

    console.log('Valor del delivery es', this.delivery);
    
    this.nodeService.getArticulos().then(arts => this.articulos = arts);

  }

}
