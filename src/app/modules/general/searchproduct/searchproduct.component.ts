import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { MyMsgService } from "../msgservice";
import { NodeService } from "../nodeservice";

interface Tag {
    name: string,
    code: string
}


@Component({
    selector: 'app-searchproduct',
    templateUrl: './searchproduct.component.html',
    styleUrls: ['./searchproduct.component.css']
})
export class SearchComponent implements OnInit {


    articulos: any = [];
    @Output() evSearch = new EventEmitter<any>();

    artsel: any = {};
    city: string = "Agregar";

    uploadedFiles: any[] = [];
    uploadSetting:any = {multiple:false, maxFileSize:1000000};

    isShowModalView = false;
    isShowModalEdit = false;
    isShowModalNewFeature = false;
    isShowModalCarga = false;


    tags: Tag[];
    selectedTags: Tag[]|null = null;

    constructor(private nodeService: NodeService,
        private mymsgservice: MyMsgService,
        private router: Router,
        private messageService: MessageService) {

        this.tags = [{
            name:"Tipti", code:"1"
        },
        {
            name:"Rappi", code:"2"
        },
        {
            name:"Catalogo-digital-megamaxi", code:"3"
        },
        {
            name:"Catalogo-digital-aki", code:"4"
        },
        {
            name:"Ecommoblar", code:"5"
        },
        {
            name:"Gira", code:"6"
        },
        {
            name:"Pronaca", code:"7"
        }];
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.mymsgservice.publishMessage('pantalla-articulos');
        }, 500);

        this.mymsgservice.source.subscribe(msg => {
            if (msg === "showNewFeature") {
                this.isShowModalNewFeature = true;
            }
            else if (msg === "showNewCatalogo") {
                this.gotoCatalogos();
            }
            else if (msg === "showCargaPlantilla") {
                console.log("Show carga plantilla");
                this.showCargaArticulos();
            }
        });
    }

    loadArticulos() {
        this.nodeService.getArticulos().then(arts => this.articulos = arts);
    }

    gotoEdit(art: any) {
        this.artsel = art;
        this.isShowModalView = true;
    }

    showEdit(art: any) {
        this.artsel = art;
        this.isShowModalEdit = true;
    }

    closeView() {
        this.isShowModalView = false;
    }

    closeEdit() {
        this.isShowModalEdit = false;
    }

    closeNewFeature() {
        this.isShowModalNewFeature = false;
    }

    gotoCatalogos() {
        this.router.navigate(['catalogos']);
    }

    showCargaArticulos() {
        this.isShowModalCarga = true;
    }

    closeCarga() {
        this.isShowModalCarga = false;
    }

    onUpload(event:any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }

}