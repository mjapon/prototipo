import { Component } from "@angular/core";

@Component({
    selector: 'app-viewfeature',
    templateUrl: './viewfeature.component.html',
    styleUrls: ['./viewfeature.component.css']
})
export class ViewFeatureComponent {
    feature: any = {};

    constructor() {

        this.feature = {
            nombre: "Nombre feature",
            tipo: "text",
            caracteres: 300
        };

    }

}