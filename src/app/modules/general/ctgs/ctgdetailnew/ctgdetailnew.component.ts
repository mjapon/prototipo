import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-ctgdetailnew',
  templateUrl: './ctgdetailnew.component.html'
})
export class CtgDetailNewComponent {

  form: any = {};
  tipoestadosel:string = "1";

  @Input()
  ctgtype:any = {};

  constructor() {

  }
}
