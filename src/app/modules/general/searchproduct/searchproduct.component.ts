import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { MyMsgService } from "../msgservice";
import { NodeService } from "../nodeservice";

@Component({
    selector: 'app-searchproduct',
    templateUrl: './searchproduct.component.html',
    styleUrls: ['./searchproduct.component.css']
})
export class SearchComponent implements OnInit {


    articulos: any = [];
    @Output() evSearch = new EventEmitter<any>();

    artsel: any = {};

    isShowModalView = false;
    isShowModalEdit = false;
    isShowModalNewFeature = false;


    constructor(private nodeService: NodeService,
        private mymsgservice: MyMsgService,
        private router: Router,
        private messageService: MessageService) {

    }

    ngOnInit(): void {
        setTimeout(() => {
            this.mymsgservice.publishMessage('pantalla-articulos');
        }, 500);

        this.mymsgservice.source.subscribe(msg => {
            if (msg === "showNewFeature") {
                console.log("Show new feature--->");
                this.isShowModalNewFeature = true;
            }

            else if (msg === "showNewCatalogo") {
                console.log("Show new catalogo--->");
                this.gotoCatalogos();
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

}