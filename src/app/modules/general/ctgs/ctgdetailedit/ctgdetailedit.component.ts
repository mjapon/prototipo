import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-ctgdetailedit',
  templateUrl: './ctgdetailedit.component.html'
})
export class CtgDetailEditComponent {

  @Input()
  ctg:any = {};

  @Input()
  ctgtype:any = {};

  tipoestadosel:string = "1";

  constructor() {

  }


}
