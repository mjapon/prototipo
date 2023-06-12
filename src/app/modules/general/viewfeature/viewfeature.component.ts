import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-viewfeature',
    templateUrl: './viewfeature.component.html',
    styleUrls: ['./viewfeature.component.css']
})
export class ViewFeatureComponent {
    
    @Input()
    feature: any = {};


    constructor() {

        /*this.feature = {
            nombre: "Nombre feature",
            tipo: "text",
            caracteres: 300
        };*/

    }

}