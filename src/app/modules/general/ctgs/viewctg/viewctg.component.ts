import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-viewctg',
  templateUrl: './viewctg.component.html'
})
export class ViewCtgComponent {

  @Input()
  ctg: any = {};

  constructor() {

  }


}
