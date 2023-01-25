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

    options: Array<any> = [];
    selectedoption: any;
    tipotemp = "1";
    isShowModalNewFeature = false;
    isShowModalViewFeature = false;
    isShowModalEditFeature = false;
    selectedFeature: any = {};

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
            if (msg === "showNewFeature") {
                this.isShowModalNewFeature = true;
            }
            console.log("Valor de mensaje:", msg, this.isShowModalNewFeature);

        });
        this.options = [
            { name: 'Tags', code: 1 },
            { name: 'Categoriás', code: 2 },
            { name: 'Subcategorías', code: 3 },
            { name: 'Divisiones', code: 4 }
        ]
        this.selectedoption = this.options[0];
    }

    loadCatalogos() {
        this.nodeService.getFeatures().then(catalogos => {
            this.catalogos = catalogos;
        });
    }
    verFeature(feaure: any) {
        this.selectedFeature = feaure;
        this.isShowModalViewFeature = true;
    }

    editarFeature(feaure: any) {
        this.selectedFeature = feaure;
        this.isShowModalEditFeature = true;
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

    isCatalogoTemp() {
        return parseInt(this.tipotemp) === 2;
    }

    closeNewFeature() {
        this.isShowModalNewFeature = false;
    }

    closeViewFeature() {
        this.isShowModalViewFeature = false;
    }

    closeEditFeature() {
        this.isShowModalEditFeature = false;
    }


}