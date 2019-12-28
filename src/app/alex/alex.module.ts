import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobportalComponent } from './jobportal/jobportal.component';
import { ServerinfoComponent } from './serverinfo/serverinfo.component';
import {MatDialogModule, MatFormFieldModule, MAT_DIALOG_DATA} from "@angular/material";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { Routes, RouterModule } from '@angular/router';
import {DataTablesModule} from 'angular-datatables';
import { AddjobportalComponent } from './addjobportal/addjobportal.component';
import { ViewjobportalComponent } from './viewjobportal/viewjobportal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlexService } from './alex.service';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

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
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule.forRoot(),
    RouterModule.forChild(routes) 
  ],
  exports: [
    
  ],
  providers: [AlexService],

})
export class AlexModule { }
