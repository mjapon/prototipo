import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-editctg',
  templateUrl: './editctg.component.html'
})
export class EditCtgComponent {

  @Input()
  ctg: any = {};

  tipoestadosel: string = "1";

  constructor() {

  }

}
