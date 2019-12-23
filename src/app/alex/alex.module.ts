import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobportalComponent } from './jobportal/jobportal.component';
import { ServerinfoComponent } from './serverinfo/serverinfo.component';

import { Routes, RouterModule } from '@angular/router';
import {DataTablesModule} from 'angular-datatables';


const routes: Routes = [
  { path: 'jobportal', component: JobportalComponent },
  { path: 'serverinfo', component: ServerinfoComponent },

];


@NgModule({
  declarations: [JobportalComponent, ServerinfoComponent],
  imports: [
    CommonModule,
    DataTablesModule.forRoot(),
    RouterModule.forChild(routes) 
  ]
})
export class AlexModule { }
