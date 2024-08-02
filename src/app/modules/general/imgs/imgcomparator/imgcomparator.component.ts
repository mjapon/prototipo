import {Component, OnInit} from '@angular/core';
import {QuickReviewPerspectiveVO} from '../../vo/QuickReviewPerspectiveVO';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-imgcomparator',
  templateUrl: './imgcomparator.component.html',
  styleUrls: ['./imgcomparator.component.css']
})
export class ImgcomparatorComponent implements OnInit {

  totalRecords = 0;
  first = 0;
  value = false;
  rows = 30;

  itemsAssigned: QuickReviewPerspectiveVO[] = [];
  selected: QuickReviewPerspectiveVO = {};

  numPages = 0;
  showModal = false;

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.itemsAssigned = [
      {
        rmState: false, description: 'frontal', barcode: '8007898004204',
        previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042500421.png?generation=1649963617924934',
        url: 'https://storage.googleapis.com/cf-max-dev/items/igm/7861001246483-13.png'
      },
      {
        rmState: false, description: 'lateral', barcode: '7861042544142',
        url: 'https://storage.googleapis.com/cf-max/items/igm/7861042544142.png?generation=1648746680345676'
      },
      {
        rmState: false, description: 'principal', barcode: '7861042500193',
        url: 'https://storage.googleapis.com/cf-max/items/igm/7861042500193.png?generation=1649963615311751'
      },
      {
        rmState: false, description: 'derecho', barcode: '7861042500254',
        previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042500407.png?generation=1649963617172273',
        url: 'https://storage.googleapis.com/cf-max/items/igm/7861042500254.png?generation=1649963616449002'
      },
      {
        rmState: false, description: 'principal', barcode: '62417',
        previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042501954.png?generation=1649963619290872',
        url: 'https://storage.googleapis.com/cf-max/items/igm/62417.png'
      }
    ];


  }

  ver(imageSelected: QuickReviewPerspectiveVO) {
    console.log('revisado');
    console.log(imageSelected);
  }

  updateImages() {
    console.log('Do update-->');

    this.messageService.add({severity: 'info', summary: 'Lógica para actualización de imágenes', detail: ''});
  }

  comparar(row: QuickReviewPerspectiveVO) {
    this.selected = row;
    console.log('Valor de selected', this.selected);
    this.showModal = true;
  }

  aprobar() {
    this.selected.rmState = false;
    this.selected.checked = true;
    this.messageService.add({severity: 'success', summary: 'Aprobada', detail: ''});
  }

  rechazar() {
    this.selected.rmState = true;
    this.selected.checked = true;
    this.messageService.add({severity: 'info', summary: 'Rechazada', detail: ''});
  }

  onPageChange($event: any) {

  }

  protected readonly Math = Math;

  back() {
    let index = this.itemsAssigned.indexOf(this.selected);
    if (index > 0) {
      this.selected = this.itemsAssigned[index - 1];
    } else {
      alert('No hay anterior')
    }
  }

  next() {
    let index = this.itemsAssigned.indexOf(this.selected);
    console.log('next:', index, this.itemsAssigned.length);
    if (index < this.itemsAssigned.length - 1) {
      this.selected = this.itemsAssigned[index + 1];
    } else {
      alert('No hay siguiente');
    }

  }
}
