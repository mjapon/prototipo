import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-newfeatureedit',
    templateUrl: './newfeatureedit.component.html',
    styleUrls: ['./newfeatureedit.component.css']
})
export class NewFeatureEditComponent {
    
    @Input()
    feature: any = {};

    tipoObligatorioSel: string = "1";

    constructor() {

        /*this.feature = {
            nombre: "Nombre feature",
            tipo: "text",
            caracteres: 300
        };*/

    }

}