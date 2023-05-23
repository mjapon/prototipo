import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-ctgdetail',
  templateUrl: './ctgdetail.component.html',
  styleUrls: ['./ctgdetail.component.css']
})
export class CtgDetailComponent implements OnChanges {

  @Input()
  ctg: any = {};

  @Input()
  loadCtgs = false;

  catalogos: any = [];
  catalogosel: any = {};
  newcatalogo: any = { codigo: 1, nombre: '' };

  isShowModalNew = false;
  isShowModalEdit = false;
  isShowModalView = false;
  images:Array<any> = [];
  displayImage = false;

  responsiveOptions: any[] = [];

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes["loadCtgs"] && changes["loadCtgs"].currentValue) {
      console.log("Se ejecuta load ctgs---->");
      this.loadCatalogos();
    }

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

  loadCatalogos() {
    this.catalogos = this.ctg.ctgs;
    console.log("catagloso:", this.catalogos);

  }

  showCatalogue(ctg: any) {
    this.catalogosel = ctg;
    this.isShowModalView = true;
  }

  editCatalogue(ctg: any) {
    this.catalogosel = ctg;
    this.isShowModalEdit = true;
  }

  showModalNew() {
    this.isShowModalNew = true;
  }

  saveNew() {

  }

  closeNew() {
    this.isShowModalNew = false;
  }
  closeEdit() {
    this.isShowModalEdit = false;
  }

  closeViewFeature() {
    this.isShowModalView = false;
  }

  showGalleria(ctg: any) {
    this.images = [];
    this.images.push(ctg);
    this.displayImage = true;
  }
}
