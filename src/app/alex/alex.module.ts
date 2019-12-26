import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobportalComponent } from './jobportal/jobportal.component';
import { ServerinfoComponent } from './serverinfo/serverinfo.component';
import {MatDialogModule} from "@angular/material";

import { Routes, RouterModule } from '@angular/router';
import {DataTablesModule} from 'angular-datatables';
import { AddjobportalComponent } from './addjobportal/addjobportal.component';
import { ViewjobportalComponent } from './viewjobportal/viewjobportal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlexService } from './alex.service';


const routes: Routes = [
  { path: 'jobportal', component: JobportalComponent },
  { path: 'serverinfo', component: ServerinfoComponent },
  { path: 'addjobportal', component: AddjobportalComponent },
  { path: 'viewjobportal', component: ViewjobportalComponent },

];


@NgModule({
  declarations: [
    JobportalComponent, 
    ServerinfoComponent, 
    AddjobportalComponent, 
    ViewjobportalComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule.forRoot(),
    RouterModule.forChild(routes) 
  ],
  providers: [AlexService],

})
export class AlexModule { }
