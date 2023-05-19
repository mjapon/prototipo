import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-ctgdetailview',
  templateUrl: './ctgdetailview.component.html'
})
export class CtgDetailViewComponent {

  @Input()
  ctg: any = {};

  constructor() {

  }

}
