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

    constructor(private nodeService: NodeService) {

        this.loadCatalogos();

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

}