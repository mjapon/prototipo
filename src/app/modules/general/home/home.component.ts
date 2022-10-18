import { Component, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { MyMsgService } from '../msgservice';
import { NodeService } from '../nodeservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities:Array<any> = [];

  selectedDelivery: any = {};
  
  files1: TreeNode[] = [];
  allStructure: TreeNode[] = [];

  selectedFile: TreeNode | undefined;

  articulos:any = [];

  deliveryMap: any = {};

  selectedFiles2: TreeNode[]=[];

  isShowAgregar:boolean=false;

  constructor(private nodeService: NodeService,
    private messageService: MessageService,
    private mymsgservice:MyMsgService) {
  }

  ngOnInit(): void {
    this.cities = [
      {name: 'TIPTI', code: '1'},
      {name: 'RAPPI', code: '2'},
      {name: 'PCV', code: '3'},
      {name: 'ECOMMERCETM', code: '4'},
      {name: 'GIRA', code: '5'},
      {name: 'PRONACA', code: '6'},
      {name: 'AGRO', code: '7'},
      {name: 'JUGETON', code: '8'},
      {name: 'KAO', code: '9'}
    ];

    this.nodeService.getFiles().then(files => this.allStructure = files);
    this.nodeService.getLazyFiles().then(delmap => this.deliveryMap = delmap);

    this.mymsgservice.source.subscribe(msg=>{
      if (msg==="showModal")
      this.showModal();

    });
  }

  nodeSelect(event:any) {    
    this.articulos =[];
    if (event.node.data==="2"){
      this.loadArticulos();
    }
  }

  allStructreNodeSelect(event:any) {

  }

  onNodeClic(){

  }

  loadArticulos(){
    this.nodeService.getArticulos().then(arts => this.articulos = arts);
  }

  loadEstructura(){
    this.files1 = [];    
    let codigos = this.nodeService.getCodigosDelivery(this.deliveryMap,this.selectedDelivery.code);
    let arboldel:TreeNode[] = []    
    this.nodeService.buildDeliveryTree(this.allStructure,codigos,arboldel);
    this.files1 =  arboldel;
    this.selectedFile = undefined;
    this.articulos = [];
  }

  showModal(){
    let codigos = this.nodeService.getCodigosDelivery(this.deliveryMap,this.selectedDelivery.code);
    let selected:TreeNode[] = [];
    codigos.forEach( (codigo:any)=>{
      this.nodeService.marcarArbol(this.allStructure, codigo, selected);

    });
    this.selectedFiles2 = selected;    
    this.isShowAgregar = true;
  }

  guardar(){
    this.files1 = this.selectedFiles2;
    this.isShowAgregar = false;
    console.log('Accion guardar');
    
  }

  cancelar(){
    this.isShowAgregar= false;
  }

}
