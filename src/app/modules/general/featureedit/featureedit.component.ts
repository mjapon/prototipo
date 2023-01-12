import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { NodeService } from "../nodeservice";

interface Tag {
    name: string,
    code: string
}


@Component({
    selector: 'app-feature-edit',
    templateUrl: './featureedit.component.html',
    styleUrls: ['./featureedit.component.css']
})
export class FeatureEditComponent implements OnChanges {

    articulo: any = {};
    articulos: any = [];

    tags: Tag[];
    selectedTags: Tag[]|null = null;


    @Input() codbarra: string = "";

    constructor(private nodeService: NodeService) {
        this.tags = [
            {name: 'Viajes', code: '1'},
            {name: 'Navidad', code: '2'},
            {name: 'Hogar', code: '3'},
            {name: 'Ropa', code: '4'},
            {name: 'Deporte', code: '5'}
        ];

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