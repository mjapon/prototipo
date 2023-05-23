import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-ctgdetailview',
  templateUrl: './ctgdetailview.component.html',
  styleUrls: ['./ctgdetailview.component.css']
})
export class CtgDetailViewComponent {

  @Input()
  ctg: any = {};


  @Input()
  ctgtype:any = {};

  images:Array<any> = [];
  displayImage = false;

  responsiveOptions: any[] = [];

  constructor() {

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];

  }

  showGalleria() {
    this.images = [];
    this.images.push(this.ctg);
    this.displayImage = true;
  }

}
