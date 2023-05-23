import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { MyMsgService } from "../../msgservice";
import { NodeService } from "../../nodeservice";

@Component({
  selector: 'app-admctg',
  templateUrl: './adminctg.component.html',
  styleUrls: ['./adminctg.component.css']
})
export class AdminCtgComponent implements OnInit {

  isShModalNew = false;
  isShModalEdit = false;
  isShModalCtg = false;

  catalogos: any = [];
  catalogosel: any = {};
  newcatalogo: any = { codigo: 1, nombre: '' };

  options: Array<any> = [];
  estados: Array<any> = [];
  selectedoption: any;
  selectedStatus: any;
  tipotemp = "1";
  isShModalView = false;

  reloadCtgsInDetail = false;

  isShowModalCarga = false;


  uploadedFiles: any[] = [];
  uploadSetting: any = { multiple: false, maxFileSize: 1000000 };

  constructor(private mymsgservice: MyMsgService,
    private nodeService: NodeService,
    private messageService: MessageService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.mymsgservice.publishMessage('pantalla-adminctg');
    }, 500);

    this.mymsgservice.source.subscribe(msg => {
      if (msg === "showNewCatalogo") {
        console.log("Show new catalogo--->");
        this.isShModalNew = true;
      }
      if (msg === "showNewFeature") {
        this.isShModalNew = true;
      }

      if (msg === "showCargaCtgs") {
        this.showModalCarga();
      }
      console.log("Valor de mensaje:", msg, this.isShModalNew);

    });
    this.options = [
      { name: 'Todos', code: 0 },
      { name: 'Funcionalidad', code: 1 },
      { name: 'Parametrización', code: 2 }
    ]
    this.selectedoption = this.options[0];

    this.estados = [
      { name: 'Todos', code: 0 },
      { name: 'Activos', code: 1 },
      { name: 'Inactivos', code: 2 },
    ]

    this.selectedStatus = this.estados[0];
  }

  onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  loadCatalogos() {
    this.nodeService.getCtgs().then(catalogos => {
      this.catalogos = catalogos;
    });
  }
  showCatalogue(feaure: any) {
    this.catalogosel = feaure;
    this.isShModalView = true;
    console.log(this.isShModalView, "show modal view-->");
  }

  editCatalogue(feaure: any) {
    this.catalogosel = feaure;
    this.isShModalEdit = true;
  }

  eliminar(catalogo: any) {
    this.nodeService.removeItemFromArray(this.catalogos, catalogo);
    this.messageService.add({ severity: 'success', detail: 'el catálogo ha sido eliminado' });
  }

  editar(catalogo: any) {
    this.catalogosel = catalogo;
    this.isShModalEdit = true;
  }

  closeNew() {
    this.isShModalNew = false;
  }

  showNew() {
    this.isShModalNew = true;
  }

  closeEdit() {
    this.isShModalEdit = false;
  }

  showModalCarga() {
    this.isShowModalCarga = true;
    console.log("show modal carga");

  }

  closeCarga() {
    this.isShowModalCarga = false;
  }

  saveNew() {
    this.isShModalNew = false;
  }

  isCatalogoTemp() {
    return parseInt(this.tipotemp) === 2;
  }

  closeNewFeature() {
    this.isShModalNew = false;
  }

  closeViewFeature() {
    this.isShModalView = false;
  }

  closeEditFeature() {
    this.isShModalEdit = false;
  }

  showCtgDetail(ctg: any) {
    this.catalogosel = ctg;
    this.isShModalCtg = true;
    this.reloadCtgsInDetail = true;
  }

  closeViewCtgsDetail() {
    this.reloadCtgsInDetail = false;
    this.isShModalCtg = false;
  }

  descargaCtgs() {

  }
}
