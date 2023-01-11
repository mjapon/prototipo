import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { NodeService } from "../nodeservice";

@Component({
    selector: 'app-feature-edit',
    templateUrl: './featureedit.component.html',
    styleUrls: ['./featureedit.component.css']
})

export class FeatureEditComponent implements OnChanges {

    articulo: any = {};
    articulos: any = [];

    @Input() codbarra: string = "";

    constructor(private nodeService: NodeService) {

    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes["codbarra"].currentValue) {
            this.buscarArticulo();
        }
    }

    buscarArticulo() {
        this.nodeService.getArticulos().then(arts => {
            this.articulos = arts;
            if (this.codbarra) {
                this.articulo = this.nodeService.getArticuloPorCodigobarra(this.articulos, this.codbarra);
                console.log("Valor de articulo es:", this.articulo);
            }
        });
    }

}