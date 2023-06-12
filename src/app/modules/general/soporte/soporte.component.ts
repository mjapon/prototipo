import { Component, OnInit } from "@angular/core";
import { NodeService } from "../nodeservice";
import { MessageService } from "primeng/api";
import { MyMsgService } from "../msgservice";

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {

  deliveries: Array<any> = [];
  areas: Array<any> = [];
  tiposBusqueda: Array<any> = [];
  barcode: string = '';

  selectedDelivery: any = null;
  selectedLocal: any = null;
  selectedTipo: any = null;
  selectedTab = 1;
  itemFinded: any = null;
  tablaItem: Array<any> = [];

  isShowModalResumen = false;

  constructor(private nodeService: NodeService,
    private mymsgservice: MyMsgService,
    private messageService: MessageService) {
    this.loadListas();
    this.selectedTipo = this.tiposBusqueda[0];
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.mymsgservice.publishMessage('pantalla-soporte');
    }, 500);

  }

  loadListas() {
    this.nodeService.getDeliveries().then(deliveries => {
      this.deliveries = deliveries;
    });

    this.nodeService.getLocales().then(locales => {
      this.areas = locales;
    });

    this.tiposBusqueda = [
      { name: 'No', code: '0' }, { name: 'Si', code: '1' }
    ];

  }

  doSearch() {
    console.log('Do search-->');

    if (!this.selectedDelivery) {
      this.messageService.add({ severity: 'error', detail: 'Elija un delivery', summary: 'Info' });
      return;
    }

    if (!this.selectedLocal) {
      this.messageService.add({ severity: 'error', detail: 'Elija un local', summary: 'Info' });
      return;
    }

    if (this.selectedTipo && this.selectedTipo.code === '0') {
      this.nodeService.getItemSoporte().then(item => {
        this.itemFinded = item;
        this.tablaItem = this.nodeService.getItemSoporteTabla(item);
      });
    }
    else {
      this.showModalResumen();
    }

  }

  closeResumen() {
    this.isShowModalResumen = false;
  }

  showModalResumen() {
    this.isShowModalResumen = true;
  }
}
