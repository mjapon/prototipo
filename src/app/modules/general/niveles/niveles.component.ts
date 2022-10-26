import { Component, OnInit } from '@angular/core';
import { flushMicrotasks } from '@angular/core/testing';
import { MessageService, TreeNode } from 'primeng/api';
import { lastValueFrom } from 'rxjs';
import { MyMsgService } from '../msgservice';
import { NodeService } from '../nodeservice';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css']
})
export class NivelesComponent implements OnInit {

  niveles: Array<any> = [];
  selectedNivel: any = {};  

  allStructure: TreeNode[] = [];

  structure:Array<any> = [];
  levelsel: any;

  isShowFormCrea=false;
  parentNodeCrear:any = null;
  form:any = {nombreNewStructure:'', descNewStructure:''};  


  constructor(private mymsgservice:MyMsgService,
    private messageService: MessageService,
    private nodeService: NodeService) { }

  ngOnInit(): void {
    this.niveles = [
      {name:'Nivel 1', code:'1'},
      {name:'Nivel 2', code:'2'},
      {name:'Nivel 3', code:'3'},
      {name:'Todos', code:'0'}
    ];

    this.nodeService.getFiles().then(files => this.allStructure = files);

    this.mymsgservice.publishMessage('pantalla-niveles');

    this.mymsgservice.source.subscribe(msg=>{      
      if (msg.startsWith("createlevel")){
        this.showFormCrea();
      }      
    });
    
}

showFormCrea(){
  this.form = {nombreNewStructure:'', descNewStructure:''};  
  this.isShowFormCrea = true;
}
  

  loadEstructura(){
    this.parentNodeCrear = null;
      this.mymsgservice.publishMessage('level--1');
      if (!this.selectedNivel.code){
        this.messageService.add({severity:'error', detail:'Elija un nivel'});
      }
      else{
        this.structure = structuredClone(this.allStructure)
        let nivel = this.selectedNivel.code;
        if (nivel === '1'){
          this.structure.forEach(nivel=>{
            nivel.children = null;
          });
        }
        else if(nivel === '2'){
          this.structure.forEach(nivel=>{
            if (nivel.children){
              nivel.children.forEach((nivel1: { children: null; })=>{
                nivel1.children=null;
              });
            }
          });
        }
      }

  }

  onLevelClic(level:any){
    this.levelsel = level;
    let msg = 'level-'+level.data;
    this.mymsgservice.publishMessage(msg);
    console.log('level sel es:', this.levelsel);
    this.parentNodeCrear = this.levelsel;
  }

  guardar(){
    let data = 0;
    let keyparent = 1;
    if (this.parentNodeCrear){
      data = parseInt(this.parentNodeCrear.data)+1;
      keyparent = parseInt(this.parentNodeCrear.key)+1;
    }

    let newNode:TreeNode = {"label": this.form. nombreNewStructure, "icon": "", 
    "data": data.toString(),
    "key": keyparent.toString()};
    
    if (this.parentNodeCrear){
      if (this.parentNodeCrear.children){
        this.parentNodeCrear.children.push(newNode);
      }
      else{
        this.parentNodeCrear.children = [newNode];
      }
    }
    else{
      this.structure.push(newNode);
    }

    this.isShowFormCrea = false;


  }

  cancelar(){
    this.isShowFormCrea = false;

  }

}
