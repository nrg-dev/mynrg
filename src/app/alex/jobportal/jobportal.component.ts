
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
import { ViewjobportalComponent } from '../viewjobportal/viewjobportal.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-jobportal',
  templateUrl: './jobportal.component.html',
  styleUrls: ['./jobportal.component.css']
})
export class JobportalComponent implements OnInit {
  displayedColumns: string[] = ['portalName', 'username', 'password','phonenumber','email','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true }) sort: MatSort;
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;


  model: any = {};
  portal:Portal;
  public add=false
  portalview="none";
  public dataList : any;
  //countryList: any;

  //countryList: any = (country as any).default;
  dialogConfig = new MatDialogConfig();

  isDtInitialized:boolean = false


  constructor( 
    private router: Router,
    private alexService: AlexService,
    private dialog: MatDialog,
    ) { 

      this.alexService.myPortaltable()
      .subscribe(
          data => {
  
              this.dataList = data;
              this.dataSource = new MatTableDataSource(this.dataList);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
              console.log("ngOnInit......4");
  
              //this.dtTrigger.next();
              console.log("ngOnInit......5");
  
         },
          error => {
              alert('Error !!!!');
          }
      );


  }


  myEventSubscription: any;

  ngOnInit() {
  //  this.dataSource.paginator = this.paginator;
   // this.dataSource.sort = this.sort;

   
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  refresh() {
    console.log("before calling...ngOnInit......"); 
    //this.router.navigate(['/landingpage']);
    this.alexService.myPortaltable()
      .subscribe(
          data => {
  
              this.dataList = data;
              this.dataSource = new MatTableDataSource(this.dataList);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
              console.log("ngOnInit......4");
  
              //this.dtTrigger.next();
              console.log("ngOnInit......5");
  
         },
          error => {
              alert('Error !!!!');
          }
      );
    //this.router.isActive;
    console.log("after calling ngOnInit......");

  }

  


public openAsPDF(){
  alert("open pdf");
  
}


openDialogForAdd() {
  this.dialogConfig.disableClose = true;
  this.dialogConfig.autoFocus = true;
  this.dialogConfig.position = {
    'top': '1000',
    left: '100'
  };
  //this.dialog.open(AddjobportalComponent, this.dialogConfig);

  this.dialog.open(AddjobportalComponent,{
   // data: {dialogTitle: "hello", dialogText: "text"},
    height: '80%', 
  });
  //.afterClosed().subscribe(result => {
   // this.refresh();
  //});
  
  //;
 // this.refresh();

}
onSubmit() {
}
public viewData(id:number){


  //this.portalview='block';
console.log("JobportalComponent Id--->"+id);
  this.dialogConfig.disableClose = true;
  this.dialogConfig.autoFocus = true;
  this.dialogConfig.position = {
    'top': '1000',
    left: '100'
  };
  //this.dialog.open(AddjobportalComponent, this.dialogConfig);

  this.dialog.open(ViewjobportalComponent,{
  //  data: {dialogTitle: "hello", dialogText: "text"},
    data: id,
    height: '80%'
  }).afterClosed().subscribe(result => {
   this.refresh();

   });;
  
  //console.log("before calling refresh...");
  //this.refresh();
  //console.log("after calling refresh...");

}
public addNew(){
  this.add= true  
 }
/*
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
*/
/*public back(){
  this.view= 'block';
  this.add= false  
 
}*/

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
