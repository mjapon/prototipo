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

  cities: Array<any> = [];

  selectedDelivery: any = {};

  currentDeliveryStructure: TreeNode[] = [];
  allStructure: TreeNode[] = [];

  selectedFile: TreeNode | undefined;
  selectedNodeCreate: TreeNode | undefined;
  parentNodeCrear: TreeNode | undefined;

  articulos: any = [];

  deliveryMap: any = {};

  selectedStructure: TreeNode[] = [];

  isShowAgregar: boolean = false;
  isShowCrear: boolean = false;
  isShowFormCrea: boolean = false;

  codigoNewStructure: string = '';
  nombreNewStructure: string = '';

  itemsMenu: MenuItem[] = [];

  codigosArbolDelivery: [] = [];
  isShowCrearArt = false;
  isShowGuardarArt = false;

  constructor(private nodeService: NodeService,
    private messageService: MessageService,
    private mymsgservice: MyMsgService) {
  }

  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-home');
    this.cities = [
      { name: 'TIPTI', code: '1' },
      { name: 'RAPPI', code: '2' },
      { name: 'PCV', code: '3' },
      { name: 'ECOMMERCETM', code: '4' },
      { name: 'GIRA', code: '5' },
      { name: 'PRONACA', code: '6' },
      { name: 'AGRO', code: '7' },
      { name: 'JUGETON', code: '8' },
      { name: 'KAO', code: '9' }
    ];

    this.itemsMenu = [
      { label: 'Crear subtipo', icon: 'fa fa-plus', command: (event => this.crearSubTipo(event)) }
    ]

    this.nodeService.getFiles().then(files => this.allStructure = files);
    this.nodeService.getLazyFiles().then(delmap => this.deliveryMap = delmap);

    this.mymsgservice.source.subscribe(msg => {
      if (msg === "showModal") {
        this.showModal();
      }
      else if (msg === "showModalCrear") {
        this.showModalCrear();
      }
    });
  }

  crearSubTipo($event: any) {
    this.parentNodeCrear = this.selectedNodeCreate;
    this.isShowFormCrea = true;
    this.nombreNewStructure = '';
    this.codigoNewStructure = '';
  }

  crearNivel1() {
    this.parentNodeCrear = undefined;
    this.isShowFormCrea = true;
    this.nombreNewStructure = '';
    this.codigoNewStructure = '';
  }

  guardarFormCrear() {
    let data = 0;
    if (this.parentNodeCrear) {
      data = parseInt(this.parentNodeCrear.data) + 1;
    }

    let newNode: TreeNode = {
      "label": this.nombreNewStructure, "icon": "",
      "data": data.toString(),
      "key": this.codigoNewStructure
    };

    if (this.parentNodeCrear) {
      if (this.parentNodeCrear.children) {
        this.parentNodeCrear.children.push(newNode);
      }
      else {
        this.parentNodeCrear.children = [newNode];
      }
    }
    else {
      this.allStructure.push(newNode);
    }

    this.isShowFormCrea = false;
  }

  cancelarFormCrear() {
    this.isShowFormCrea = false;
  }

  nodeSelect(event: any) {
    this.articulos = [];
    if (event.node.data === "2") {
      this.loadArticulos();
    }
  }

  newStructureNodeSelect(event: any) {
    console.log('new structure node select->', event);

  }

  newStructreNodeUnSelect(event: any) {
    console.log('new structure node unselect->', event);

  }

  onNodeClic() {

  }

  loadArticulos() {
    this.nodeService.getArticulos().then(arts => this.articulos = arts);
  }

  auxLoadStructure(codigos: []) {
    this.currentDeliveryStructure = [];
    let arboldel: TreeNode[] = [];
    this.nodeService.buildDeliveryTree(this.allStructure, codigos, arboldel);
    this.currentDeliveryStructure = arboldel;
    this.selectedFile = undefined;
    this.articulos = [];
  }

  loadEstructura() {
    this.codigosArbolDelivery = this.nodeService.getCodigosDelivery(this.deliveryMap, this.selectedDelivery.code);
    this.auxLoadStructure(this.codigosArbolDelivery);
  }

  showModal() {
    let selected: TreeNode[] = [];
    this.codigosArbolDelivery.forEach((codigo: any) => {
      this.nodeService.marcarArbol(this.allStructure, codigo, selected);
    });
    this.selectedStructure = selected;
    console.log('showModal Valor de codigosArbolDelivery ', this.codigosArbolDelivery);
    this.isShowAgregar = true;
  }

  toggleExpand($event: MouseEvent) {
    this.selectedFile!.expanded = !this.selectedFile!.expanded;
  }

  guardar() {
    console.log('Guadar Valor de codigosArbolDelivery ', this.codigosArbolDelivery);
    this.auxLoadStructure(this.codigosArbolDelivery);
    this.isShowAgregar = false;
  }

  allStructreNodeSelect(event: any) {
    let keyToAppend = event.node.key;
    this.nodeService.addItemToArray(this.codigosArbolDelivery, keyToAppend);
  }

  allStructureNodeUnSelect(event: any) {
    let keyToRemove = event.node.key;
    this.nodeService.removeItemFromArray(this.codigosArbolDelivery, keyToRemove);
  }

  onSearch() {
    this.isShowGuardarArt = true;
  }

  cancelar() {
    this.isShowAgregar = false;
  }

  showModalCrear() {
    this.isShowCrear = true;
  }

  cancelarCrear() {
    this.isShowCrear = false;
  }

  guardarCrear() {
    this.isShowCrear = false;
  }

  showCrearArticulo() {
    this.isShowCrearArt = true;
  }

  guardarArticulos() {
    this.isShowCrearArt = false;
  }

  cancelarArticulos() {
    this.isShowCrearArt = false;
  }


}