import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { MyMsgService } from "../msgservice";
import { NodeService } from "../nodeservice";

@Component({
    selector: 'app-catalogos',
    templateUrl: './catalogos.component.html',
    styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {

    isShowModalNew = false;
    isShowModalEdit = false;

    catalogos: any = [];
    catalogosel: any = {};
    newcatalogo: any = { codigo: 1, nombre: '' };

    constructor(private mymsgservice: MyMsgService,
        private nodeService: NodeService,
        private messageService: MessageService) {

    }

    ngOnInit(): void {
        setTimeout(() => {
            this.mymsgservice.publishMessage('pantalla-catalogos');
        }, 500);

        this.mymsgservice.source.subscribe(msg => {
            if (msg === "showNewCatalogo") {
                console.log("Show new catalogo--->");
                this.isShowModalNew = true;
            }
        });
    }

    loadCatalogos() {
        this.nodeService.getCatalogos().then(catalogos => {
            this.catalogos = catalogos;
        });
    }

    eliminar(catalogo: any) {
        this.nodeService.removeItemFromArray(this.catalogos, catalogo);
        this.messageService.add({ severity: 'success', detail: 'el catálogo ha sido eliminado' });
    }

    editar(catalogo: any) {
        this.catalogosel = catalogo;
        this.isShowModalEdit = true;
    }

    closeNew() {
        this.isShowModalNew = false;
    }

    showNew() {
        this.isShowModalNew = true;
    }

    closeEdit() {
        this.isShowModalEdit = false;
    }

    saveNew() {
        this.isShowModalNew = false;
    }

}