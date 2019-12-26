import { Component, OnInit } from '@angular/core';
import {  ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { DataTablesModule, DataTableDirective } from 'angular-datatables';
import * as jQuery from 'jquery';
//import { User, Portal } from '../../_models';
import { Subject } from 'rxjs';
import { AlertService, UserService } from '../../_services';
import { Router } from '@angular/router';
import { Portal } from 'src/app/_models';
//import  *  as  country  from  'country.json';
//import * as country from './country.json';
import { HttpClientModule } from '@angular/common/http'; 
import { AlexService } from '../alex.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { AddjobportalComponent } from '../addjobportal/addjobportal.component';


@Component({
  selector: 'app-jobportal',
  templateUrl: './jobportal.component.html',
  styleUrls: ['./jobportal.component.css']
})
export class JobportalComponent implements OnInit {
  
  @ViewChild(DataTableDirective, { static: true }) datatableElement: DataTableDirective;
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = { };
  dtInstance: DataTables.Api;
  dtTrigger: Subject<any> = new Subject();
  dt_data: any = {};
  //dtOptions: DataTables.Settings = { };
  submitted=false;
  model: any = {};
  portal:Portal;
  view= 'block';
  public add=false
  portalview="none";
  public dataList : any;
  //countryList: any;

  //countryList: any = (country as any).default;
  dialogConfig = new MatDialogConfig();

  isDtInitialized:boolean = false


  countryList:any;
  constructor( private router: Router,
    private alexService: AlexService,
    private dialog: MatDialog,
    ) { 
      
    
  }


  myEventSubscription: any;

  ngOnInit() {
    this.dataList = null;
    console.log("ngOnInit......");
    const country = require("../../country.json");
    this.countryList=country;
  
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5,
    processing: true
  };
 this.myEventSubscription=this.alexService.myPortaltable()
    .subscribe(
        data => {
          this.view= 'block';
          this.add= false;
            this.dataList = data;
            this.dtTrigger.next();
       },
        error => {
            alert('Error !!!!');
        }
    );
  //  this.dtTrigger.next();

   
  }

 

  
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;


public openAsPDF(){
  alert("open pdf");
  
}


openDialog() {


  this.dialogConfig.disableClose = true;
  this.dialogConfig.autoFocus = true;
  this.dialogConfig.position = {
    'top': '1000',
    left: '100'
  };
  //this.dialog.open(AddjobportalComponent, this.dialogConfig);

  this.dialog.open(AddjobportalComponent,{
    height: '80%'
  });

}
onSubmit() {
  this.submitted = false;
}
public viewData(){
  this.portalview='block';
}
public addNew(){
  this.view= 'none';
  this.add= true  
 }

 myPortalReg(){
  this.model.currentUser=localStorage.getItem('currentusername');
  console.log('............controller myPortalReg....');
  this.alexService.myPortalReg(this.model)
            .subscribe(
                data => {
                //   this.portal=data;
                    console.log('return value -->'+data);
                    alert("Successfully Saved ");
                    this.model.portalname=null;
                  //  if(this.portal.status=="success") {
                        console.log('If User Exits');
                     //   this.userExsistdialog = 'block';
                     //   this.loading = false;
                 //   }

                  
                },
                error => {
                  alert("error ");

                   // this.otherErrordialog = 'block';
                   // this.loading = false;
                });

}

public back(){
  this.view= 'block';
  this.add= false  



  
}
  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });
    //doc.open('tableToPdf.pdf');
    doc.text(20, 20, 'Employee Information');
    
    let left = 15;
    let top = 8;
    const imgWidth = 100;
    const imgHeight = 100;
    var img = new Image();
    var imgData = './assets/images/nrg_logo.png'
    //doc.addImage('./assets/images/nrg_logo.png', 'PNG', left, top, imgWidth, imgHeight);
    //doc.addImage(imgData, 'PNG', 15, 40, 180, 180);

   // doc.output('dataurlnewwindow'); //opens pdf in new tab
//doc.setFontSize(26);
    doc.save('tableToPdf.pdf');
  }


  bodyText: string;

  
}
