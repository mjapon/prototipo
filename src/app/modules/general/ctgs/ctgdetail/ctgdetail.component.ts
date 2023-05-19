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

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes["loadCtgs"] && changes["loadCtgs"].currentValue) {
      console.log("Se ejecuta load ctgs---->");
      this.loadCatalogos();
    }

  }

  loadCatalogos() {
    this.catalogos = this.ctg.ctgs;
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

}
