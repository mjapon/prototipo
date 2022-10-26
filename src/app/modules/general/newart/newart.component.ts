import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeService } from '../nodeservice';

@Component({
  selector: 'app-newart',
  templateUrl: './newart.component.html',
  styleUrls: ['./newart.component.css']
})
export class NewartComponent implements OnInit {

  articulos:any = [];
  @Input() delivery:any = {};  

  @Output() evSearch = new EventEmitter<any>();
  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
    
  }

  loadArticulos(){
    this.nodeService.getArticulos().then(arts => this.articulos = arts);
    this.evSearch.emit('')
  }

}
