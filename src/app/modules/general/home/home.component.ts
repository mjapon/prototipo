import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
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
  selectedNodeCreate: TreeNode | undefined;
  parentNodeCrear: TreeNode| undefined;

  articulos:any = [];

  deliveryMap: any = {};

  selectedFiles2: TreeNode[]=[];

  isShowAgregar:boolean=false;
  isShowCrear:boolean=false;
  isShowFormCrea:boolean=false;

  codigoNewStructure:string = '';
  nombreNewStructure:string = '';

  itemsMenu: MenuItem[] = [];

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

    this.itemsMenu = [
      {label:'Crear subtipo', icon:'fa fa-plus', command:(event=>this.crearSubTipo(event))}
    ]

    this.nodeService.getFiles().then(files => this.allStructure = files);
    this.nodeService.getLazyFiles().then(delmap => this.deliveryMap = delmap);

    this.mymsgservice.source.subscribe(msg=>{
      if (msg==="showModal"){
        this.showModal();
      }
      else if(msg==="showModalCrear"){
        this.showModalCrear();
      }
      
    });

  }

  crearSubTipo($event:any){
    this.parentNodeCrear = this.selectedNodeCreate;
    this.isShowFormCrea = true;
    this.nombreNewStructure = '';
    this.codigoNewStructure = '';
  }

  crearNivel1(){
    this.parentNodeCrear = undefined;
    this.isShowFormCrea = true;
    this.nombreNewStructure = ''; 
    this.codigoNewStructure = '';   
  }
  
  guardarFormCrear(){    
    let data = 0;
    if (this.parentNodeCrear){
      data = parseInt(this.parentNodeCrear.data)+1;
    }

    let newNode:TreeNode =     {"label": this.nombreNewStructure, "icon": "", 
    "data": data.toString(),
    "key": this.codigoNewStructure};
    
    if (this.parentNodeCrear){
      if (this.parentNodeCrear.children){
        this.parentNodeCrear.children.push(newNode);
      }
      else{
        this.parentNodeCrear.children = [newNode];
      }
    }
    else{
      this.allStructure.push(newNode);
    }

    this.isShowFormCrea = false;
  }

  cancelarFormCrear(){
    this.isShowFormCrea = false;
  }

  nodeSelect(event:any) {    
    this.articulos =[];
    if (event.node.data==="2"){
      this.loadArticulos();
    }
  }

  allStructreNodeSelect(event:any) {

  }

  newStructureNodeSelect(event:any) {

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

  toggleExpand($event:MouseEvent){
    this.selectedFile!.expanded= !this.selectedFile!.expanded;
  }

  guardar(){
    this.files1 = this.selectedFiles2;
    this.isShowAgregar = false;
  }

  cancelar(){
    this.isShowAgregar= false;
  }

  showModalCrear(){
    this.isShowCrear=true;
  }

  cancelarCrear(){
    this.isShowCrear=false;
  }

  guardarCrear(){
    this.isShowCrear=false;
  }

}