
import * as jsPDF from 'jspdf';
import { Router } from '@angular/router';
import { ServerInfo } from 'src/app/_models';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Issue } from 'src/app/_models/issue';
import { AlertService } from 'src/app/alert/alert.service';
import { Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';
import { AlexService } from '../alex.service';



@Component({
  selector: 'add',
  styleUrls: ['./serverinfo.css'],
  templateUrl: './add.html', 
})
export class AddServerInfo {
  countryList:any;
  priorityList:any;
  model: any = {};
  serverinfo:ServerInfo; 
  constructor(
    public dialogRef: MatDialogRef<AddServerInfo>,
    ) {
      const country = '../../country.json';
      const priority = "../../priority.json";
      this.countryList=country;
      this.priorityList=priority;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveServerinfo(){

  }
}



@Component({
  selector: 'view',
  styleUrls: ['./serverinfo.css'],
  templateUrl: './view.html', 
})
export class ViewServerInfo {
  countryList:any;
  priorityList:any;
  model: any = {};
  serverinfo:ServerInfo; 
  constructor(
    private alexService: AlexService,
    private alertService: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewServerInfo>,
    ) {
      const country = '../../country.json';
      const priority = "../../priority.json";
      this.countryList=country;
      this.priorityList=priority;

      console.log("  ID  --->"+this.data);      
      this.alexService.getServerinfo(this.data)
      .subscribe(
          data => {
              this.model = data;
              console.log(" Id-->"+this.model.portalId);
 
              
          },
          error => {
              alert('Error !!!!');
          }
      );

    }

  onNoClick(): void {
    this.dialogRef.close();
  }


  editRemove(value:string) {
    if(value=="PUT"){
    // alert(" PUT ID --->"+value);
     console.log("Update  ID --->"+this.model.serverInfoId);
     this.alexService.updateServerinfo(this.model)
     .subscribe(
         data => {
           console.log('update output-->'+data.status);

             if(data.status=="success"){
               console.log('successfully updated...');
               this.dialogRef.close();
               this.alertService.success("Server info successfully updated ");
               setTimeout(() => {
                this.alertService.clear();
              }, 2000);

             }
        
             
         },
         error => {
           this.dialogRef.close();
             alert('Udate Error !!!!');
         }
     );
 
    }
    if(value=="DELETE"){
     console.log(" ID --->"+this.model.serverInfoId);
     this.alexService.removeServerinfo(this.model.serverInfoId)
     .subscribe(
         data => {
          // this.dialogRef.close();
          this.dialogRef.close();
          console.log('successfully deleted...');
          this.alertService.success("Server info successfully Removed..");
          setTimeout(() => {
            this.alertService.clear();
          }, 2000);

         },
         error => {
             alert('Error !!!!');
         }
     );


    }
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-serverinfo',
  templateUrl: './serverinfo.component.html',
  styleUrls: ['./serverinfo.component.css']
})
export class ServerinfoComponent implements OnInit {
  displayedColumns: string[] = ['name','userName','password','serverInfoId'];
  dataSource: MatTableDataSource<any>; 

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true }) sort: MatSort;
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

 
  model: any = {};
  serverinfo:ServerInfo;
  public add=false
  public dataList : any;
  dialogConfig = new MatDialogConfig();
  isDtInitialized:boolean = false

  constructor( 
    private router: Router,
    private alexService: AlexService,
    private dialog: MatDialog,
    private alertService: AlertService,
    ) { 

      this.alexService.loadServerinfo()
      .subscribe(
          data => {
          this.dataList = data;
          this.dataSource = new MatTableDataSource(this.dataList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
 
         },
          error => {
              alert('Error !!!!');
          }
      );


  }

  ngOnInit() {
  }

  openfilter(): void {
   
      const dialogRef = this.dialog.open(AddServerInfo, {
        
         width: '60%',
  //  data: {name: this.name, animal: this.animal}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   // this.animal = result;
  });

}    

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
  refresh() {
    console.log("before calling...ngOnInit......"); 
    this.alexService.loadServerinfo()
      .subscribe(
          data => {
              this.dataList = data;
              this.dataSource = new MatTableDataSource(this.dataList);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
              console.log("ngOnInit......4");
         },
          error => {
              alert('Error !!!!');
          }
      );
  }

  addNew() {
  this.dialogConfig.disableClose = true;
  this.dialogConfig.autoFocus = true;
  this.dialogConfig.position = {
    'top': '1000',
    left: '100'
  };
  this.dialog.open(AddServerInfo,{
    height: '80%', 
  })
  .afterClosed().subscribe(result => {
    this.refresh();
  });
    
} 
 
public viewData(issueId:number){
console.log("JobportalComponent Id--->"+issueId);
  this.dialogConfig.disableClose = true;
  this.dialogConfig.autoFocus = true;
  this.dialogConfig.position = {
    'top': '1000',
    left: '100'
  };
  this.dialog.open(ViewServerInfo,{
  //  data: {dialogTitle: "hello", dialogText: "text"},
    data: issueId,
    height: '80%'
  }).afterClosed().subscribe(result => {
   this.refresh();
   });;
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
    doc.save('tableToPdf.pdf');
  }
  bodyText: string;
 
}
