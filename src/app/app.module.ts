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
    CatalogosComponent
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
    FileUploadModule 
  ],
  providers: [NodeService, MessageService,MyMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }