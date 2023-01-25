import { Component } from "@angular/core";
import { NodeService } from "../nodeservice";

@Component({
    selector: 'app-newfeature',
    templateUrl: './newfeature.component.html',
    styleUrls: ['./newfeature.component.css']
})
export class NewFeatureComponent {

    tiposel: string = "1";
    catalogos: Array<any> = [];
    selectedCatalogo: any;

    isShowModalNew = false;

    newcatalogo: any = { codigo: 1, nombre: '' };

    constructor(private nodeService: NodeService) {
        this.loadCatalogos();
    }

    clearNewCatalogo() {
        this.newcatalogo = { codigo: 1, nombre: '' };
    }

    loadCatalogos() {
        this.nodeService.getCatalogosGen().then(catalogos => {
            this.catalogos = catalogos;
            console.log("Catalogos:", this.catalogos);
        });
    }

    esCatalogo() {
        return parseInt(this.tiposel) === 4;
    }

    showFormNewCatalogo() {
        this.clearNewCatalogo();
        this.isShowModalNew = true;
    }

    closeNew() {
        this.isShowModalNew = false;
    }
    saveNew() {
        if (this.newcatalogo.nombre.length > 0) {
            this.catalogos.push(this.newcatalogo);
            this.isShowModalNew = false;
        }
        else {
            //alert("Ingrese el nombre del catálogo");
        }
    }
}