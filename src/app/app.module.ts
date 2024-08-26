import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NivelesComponent } from './modules/general/niveles/niveles.component';
import { NewartComponent } from './modules/general/newart/newart.component';
import { StartComponent } from './modules/general/start/start.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import {TreeModule} from 'primeng/tree';
import {ToastModule} from 'primeng/toast';
import { NodeService } from './modules/general/nodeservice';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import {TableModule} from 'primeng/table';
import { MyMsgService } from './modules/general/msgservice';
import {DialogModule} from 'primeng/dialog';
import {ContextMenuModule} from 'primeng/contextmenu';
import { SearchComponent } from './modules/general/searchproduct/searchproduct.component';
import { FeaturesComponent } from './modules/general/features/features.component';
import { FeatureEditComponent } from './modules/general/featureedit/featureedit.component';
import { NewFeatureComponent } from './modules/general/newfeature/newfeature.component';
import { CatalogosComponent } from './modules/general/catalogos/catalogos.component';
import { PaginatorModule } from 'primeng/paginator';
import { ViewFeatureComponent } from './modules/general/viewfeature/viewfeature.component';
import { NewFeatureEditComponent } from './modules/general/newfeatureedit/newfeatureedit.component';
import { AdminCtgComponent } from './modules/general/ctgs/admctgos/adminctg.component';
import { ViewCtgComponent } from './modules/general/ctgs/viewctg/viewctg.component';
import { EditCtgComponent } from './modules/general/ctgs/editctg/editctg.component';
import { CtgDetailComponent } from './modules/general/ctgs/ctgdetail/ctgdetail.component';
import { CtgDetailViewComponent } from './modules/general/ctgs/ctgdetailview/ctgdetailview.component';
import { CtgDetailEditComponent } from './modules/general/ctgs/ctgdetailedit/ctgdetailedit.component';
import { CtgDetailNewComponent } from './modules/general/ctgs/ctgdetailnew/ctgdetailnew.component';
import {GalleriaModule} from 'primeng/galleria';
import { SoporteComponent } from './modules/general/soporte/soporte.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import {KFieldsetComponent} from "./modules/general/k-fieldset/k-fieldset.component";
import { ImglistComponent } from './modules/general/imgs/imglist/imglist.component';
import { ImgcomparatorComponent } from './modules/general/imgs/imgcomparator/imgcomparator.component';
import {CheckboxModule} from 'primeng/checkbox';
import {ImageviewerComponent} from './modules/general/imageviewer/imageviewer.component';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NivelesComponent,
    NewartComponent,
    StartComponent,
    SearchComponent,
    FeaturesComponent,
    FeatureEditComponent,
    NewFeatureComponent,
    CatalogosComponent,
    ViewFeatureComponent,
    NewFeatureEditComponent,
    AdminCtgComponent,
    ViewCtgComponent,
    EditCtgComponent,
    CtgDetailComponent,
    CtgDetailViewComponent,
    CtgDetailEditComponent,
    CtgDetailNewComponent,
    SoporteComponent,
    KFieldsetComponent,
    ImglistComponent,
    ImgcomparatorComponent,
    ImageviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    TreeModule,
    ToastModule,
    TableModule,
    DialogModule,
    ContextMenuModule,
    MultiSelectModule,
    FileUploadModule,
    PaginatorModule,
    GalleriaModule,
    RadioButtonModule,
    CheckboxModule,
    DataViewModule
  ],
  providers: [NodeService, MessageService,MyMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
