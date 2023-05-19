import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-ctgdetailedit',
  templateUrl: './ctgdetailedit.component.html'
})
export class CtgDetailEditComponent {

  @Input()
  ctg:any = {};

  tipoestadosel:string = "1";

  constructor() {

  }


}
