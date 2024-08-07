import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-imageviewer',
  templateUrl: './imageviewer.component.html',
  styleUrls: ['./imageviewer.component.scss']
})
export class ImageviewerComponent {

  @Input() images: Array<string> = [];

  @Input()
  index = 0;

  @Input()
  display = false;
  @Output() displayChange = new EventEmitter<boolean>();

  private scale = 1;

  private zoomFactor= 0.1;

  public fullscreen = false;

  public style = {transform: '', msTransform: '', oTransform: '', webkitTransform: ''};

  loading = false;

  private MAX_ZOOM = 1.8;
  private MIN_ZOMM = 0.4;

  zoomIn() {
    if (this.scale<=this.MAX_ZOOM){
      this.scale = this.scale * (1 + this.zoomFactor);
      console.log('zoomIn->Escala es:', this.scale);
      this.updateStyle();
    }
  }

  zoomOut() {
    if (this.scale > this.MIN_ZOMM) {
      this.scale = this.scale/ (1 + this.zoomFactor);
      console.log('zoomOut->Escala es:', this.scale);
      this.updateStyle();
    }
  }

  private rotation = 0;

  rotateClockwise() {
    this.rotation += 90;
    this.updateStyle();
  }

  rotateCounterClockwise() {
    this.rotation -= 90;
    this.updateStyle();
  }

  private updateStyle() {
    this.style.transform = `rotate(${this.rotation}deg) scale(${this.scale})`;
    this.style.msTransform = this.style.transform;
    this.style.webkitTransform = this.style.transform;
    this.style.oTransform = this.style.transform;

    console.log('Se ejecutó update style');
  }

  reset() {
    this.scale = 1;
    this.rotation = 0;
    //this.translateX = 0;
    //this.translateY = 0;
    this.updateStyle();
  }

  toggleFullscreen() {
    this.fullscreen = !this.fullscreen;
    if (!this.fullscreen) {
      this.reset();
    }
  }

  @HostListener('window:keyup.ArrowRight', ['$event'])
  nextImage() {
    if (this.index < this.images.length - 1) {
      this.loading = true;
      this.index++;
      this.reset();
    }
  }

  @HostListener('window:keyup.ArrowLeft', ['$event'])
  prevImage() {
    if (this.index > 0) {
      this.loading = true;
      this.index--;
      this.reset();
    }
  }

  close(){
    this.display = false;
    this.reset();
    this.displayChange.emit(false);
  }

}
