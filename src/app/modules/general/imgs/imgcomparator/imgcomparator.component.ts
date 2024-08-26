import {Component, OnInit} from '@angular/core';
import {QuickReviewPerspectiveVO} from '../../vo/QuickReviewPerspectiveVO';
import {MessageService, SelectItem} from 'primeng/api';
import {ImageRowVO} from '../../vo/ImageRow';

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

  itemsAssigned: ImageRowVO[] = [];
  imageRowSelected:any = {};
  //seletedImageRowVO:ImageRowVO;
  selected: QuickReviewPerspectiveVO = {};

  perspectiveTypes: SelectItem[] = [];
  perspectiveSelected: any = {};

  numPages = 0;
  showModal = false;

  protected readonly Math = Math;
  urlImages: any;

  displayImage = false;

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {

    this.perspectiveTypes = [
      {
        "value": "IGF",
        "label": "PRINCIPAL FRONTAL"
      },
      {
        "value": "P3D",
        "label": "POSTERIOR - DETRAS"
      },
      {
        "value": "PFI",
        "label": "PERSPECTIVA 3/4 IZQUIERDO"
      },
      {
        "value": "PFD",
        "label": "PERSPECTIVA 3/4 DERECHO"
      },
      {
        "value": "PPO",
        "label": "FRONTAL-LATERAL IZQUIERDO"
      },
      {
        "value": "PSE",
        "label": "FRONTAL LATERAL DERECHO"
      },
      {
        "value": "OI9",
        "label": "TEXTURA MATERIAL 1"
      },
      {
        "value": "O10",
        "label": "TEXTURA MATERIAL 2"
      },
      {
        "value": "O13",
        "label": "MECANISMO"
      },
      {
        "value": "O14",
        "label": "OTRAS IMAGENES 1"
      },
      {
        "value": "O15",
        "label": "OTRAS IMAGENES 2"
      },
      {
        "value": "P3I",
        "label": "TABLA NUTRICIONAL - O - ZOOM"
      },
    ];

    this.itemsAssigned = [
      {
        barcode: '8007898004204', description :'ANGLE ESCOBA LARGE', perspectives :{
          'IGF':{
            rmState: false, name:'Frontal',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042500421.png?generation=1649963617924934',
            url: 'https://storage.googleapis.com/cf-max-dev/items/igm/7861001246483-13.png'
          },
          'P3D':{
            rmState: false, name: 'Lateral',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042544142-1.png',
            url: 'https://storage.googleapis.com/cf-max/items/igm/7861042544142.png?generation=1648746680345676'
          },
          'PFI':{
            rmState: false, name:'tabla nutricional',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042544142.png?generation=1648746680345676',
          },
          'PPO':{
            rmState: false, name:'Izquierdo',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042500407.png?generation=1649963617172273',
            url: 'https://storage.googleapis.com/cf-max/items/igm/7861042500254.png?generation=1649963616449002'
          },
          'O13':{
            rmState: false, name:'Derecho',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042501954.png?generation=1649963619290872',
            url: 'https://storage.googleapis.com/cf-max/items/igm/62417.png'
          }
      }},
      {
        barcode: '7861042544142', description :'PAPA SUPERCHOLA MALLA SX', perspectives :{
          'IGF':{
            rmState: false, name:'Frontal',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042500421.png?generation=1649963617924934',
            url: 'https://storage.googleapis.com/cf-max-dev/items/igm/7861001246483-13.png',

          },
          'P3D':{
            rmState: false, name: 'Lateral',
            url: 'https://storage.googleapis.com/cf-max/items/igm/7861042544142.png?generation=1648746680345676',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/4593.png'
          },
          'PFI':{
            rmState: false, name:'tabla nutricional',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/5621.png'
          },
          'O15':{
            rmState: false, name:'Izquierdo',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042500407.png?generation=1649963617172273',
            url: 'https://storage.googleapis.com/cf-max/items/igm/7861042500254.png?generation=1649963616449002'
          },
          'O14':{
            rmState: false, name:'Derecho',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042501954.png?generation=1649963619290872',
            url: 'https://storage.googleapis.com/cf-max/items/igm/62417.png'
          }
        }
      },
      {
        barcode: '7861042500193', description :'SX.FREJOL NEGRO', perspectives :{
          'IGF':{
            rmState: false, name:'Frontal',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042500421.png?generation=1649963617924934',
            url: 'https://storage.googleapis.com/cf-max-dev/items/igm/7861001246483-13.png'
          },
          'PSE':{
            rmState: false, name: 'Lateral',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/5622.png'
          },
          'PFI':{
            rmState: false, name:'tabla nutricional',
            url: 'https://storage.googleapis.com/cf-max/items/igm/7861042500193.png?generation=1649963615311751',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/5623.png'
          },
          'O10':{
            rmState: false, name:'Izquierdo',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042500407.png?generation=1649963617172273',
            url: 'https://storage.googleapis.com/cf-max/items/igm/7861042500254.png?generation=1649963616449002'
          },
          'P3I':{
            rmState: false, name:'Derecho',
            previusUrl: 'https://storage.googleapis.com/cf-max/items/igm/7861042501954.png?generation=1649963619290872',
          }
        }
      }



    ];


  }

  ver(imageSelected: ImageRowVO) {
    console.log('revisado');
    console.log(imageSelected);
    //this.imageRowSelected = imageSelected;
  }

  updateImages() {
    console.log('Do update-->');

    this.messageService.add({severity: 'info', summary: 'Lógica para actualización de imágenes', detail: ''});
  }

  comparar(row: ImageRowVO, perspective:any) {
    //this.selected = row;
    console.log('Valor de selected', row);
    this.imageRowSelected = row;
    this.perspectiveSelected = perspective;
    this.selected =  this.imageRowSelected.perspectives[this.perspectiveSelected.value];
    this.showModal = true;
  }

  aprobar() {
    if (this.selected){
      this.selected.rmState = false;
      this.selected.checked = true;
      this.messageService.add({severity: 'success', summary: 'Aprobada', detail: ''});
    }
  }

  rechazar() {
    if (this.selected){
      this.selected.rmState = true;
      this.selected.checked = true;
      this.messageService.add({severity: 'info', summary: 'Rechazada', detail: ''});
    }
  }

  onPageChange($event: any) {

  }

  hasImage(it: QuickReviewPerspectiveVO){
    return  it &&  (it.previusUrl || it.url);
  }

  back() {
    let index = this.perspectiveTypes.indexOf(this.perspectiveSelected);
    if (index > 0) {
      this.perspectiveSelected = this.perspectiveTypes[index-1];
      console.log('perspectiveSelected', this.perspectiveSelected);
      this.selected =  this.imageRowSelected.perspectives[this.perspectiveSelected.value];
      if (!this.hasImage(this.selected)){
        this.back();
      }
    } else {
      alert('No hay anterior')
    }
  }

  next() {
    let index = this.perspectiveTypes.indexOf(this.perspectiveSelected);
    console.log('next:', index, this.perspectiveTypes.length);//
    if (index < this.perspectiveTypes.length - 1) {
      this.perspectiveSelected = this.perspectiveTypes[index+1];
      this.selected =  this.imageRowSelected.perspectives[this.perspectiveSelected.value];
      if (!this.hasImage(this.selected)){
        this.next();
      }
    } else {
      alert('No hay siguiente');
    }
  }

  showImageZoom(url:any){
    this.urlImages = [url];
    this.displayImage = true;
  }

}
