import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA} from "@angular/material";
import { Inject } from '@angular/core';
import { Issue } from 'src/app/_models';
import { UserService } from '../user.service';
import { AlertComponent } from 'src/app/alert/alert/alert.component';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { AlertService } from 'src/app/alert/alert.service';

@Component({
  selector: 'app-viewissues',
  templateUrl: './viewissues.component.html',
  styleUrls: ['./viewissues.component.css']
})
export class ViewissuesComponent implements OnInit {
  //dialogRef: MdDialogRef<ViewjobportalComponent>;
  model: any = {};
  issue:Issue;
  priorityList:any;
  countryList:any;
  dialogConfig = new MatDialogConfig();

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private alertService: AlertService,

    public dialogRef: MatDialogRef<ViewissuesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {  

    const priority = require("../../priority.json");
    this.priorityList=priority;
        //  console.log(" ViewjobportalComponent ID  --->"+this.data);
     // console.log("data 2--->"+this.data.dialogText);
      
     this.userService.get(this.data)
     .subscribe(
         data => {
             this.model = data;
             console.log("portal Id-->"+this.model.issueId);

             
         },
         error => {
             alert('Error !!!!');
         }
     );
  
     }
  ngOnInit() {
    console.log(this.data);
    const country = require("../../country.json");
    this.countryList=country;
  }

  close() {
     this.dialogRef.close();
   }


   editRemove(value:string) {
     if(value=="PUT"){
     // alert(" PUT ID --->"+value);
      console.log("Update Issue --->"+this.model.issueId);
      this.userService.update(this.model)
      .subscribe(
          data => {
            console.log("update status"+data.status);
              if(data.status=="success"){
                console.log('successfully updated...');
                this.alertService.success("successfully saved");
                setTimeout(() => {
                  this.alertService.clear();
                }, 1000);

              }
         else{
           alert("Error else;");
         }
              
          },
          error => {
            this.dialogRef.close();
              alert('Update Error !!!!');
          }
      );
 
     }
     if(value=="DELETE"){
      console.log("Portal ID --->"+this.model.issueId);
      this.userService.remove(this.model.issueId)
      .subscribe(
          data => {
           this.dialogRef.close();
           this.alertService.warn("Removed");
           setTimeout(() => {
             this.alertService.clear();
           }, 1000);
          },
          error => {
              alert('Error !!!!');
          }
      );
 

     }
     this.dialogRef.close();
   }
}
