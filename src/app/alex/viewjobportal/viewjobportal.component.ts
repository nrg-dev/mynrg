import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA} from "@angular/material";
import { Inject } from '@angular/core';
import { AlexService } from '../alex.service';
import { Portal } from 'src/app/_models';
import { AlertService } from 'src/app/alert/alert.service';
 
@Component({
  selector: 'app-viewjobportal',
  templateUrl: './viewjobportal.component.html',
  styleUrls: ['./viewjobportal.component.css']
})
export class ViewjobportalComponent implements OnInit {
  //dialogRef: MdDialogRef<ViewjobportalComponent>;
  model: any = {};
  portal:Portal;
  constructor(
    private alexService: AlexService,
    private alertService: AlertService,

    public dialogRef: MatDialogRef<ViewjobportalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {  

      //console.log('data', this.dialogRef);
      console.log(" ViewjobportalComponent ID  --->"+this.data);
     // console.log("data 2--->"+this.data.dialogText);
      
     this.alexService.myPortalview(this.data)
     .subscribe(
         data => {
             this.model = data;
             console.log("portal Id-->"+this.model.portalId);
             console.log("notes name-->"+this.model.notes);

             
         },
         error => {
             alert('Error !!!!');
         }
     );
     //this.dialogRef.close(this.data);

     // this.dialogTitle = this.data.dialogTitle;
    //this.dialogText = this.data.dialogText;

     }
public countryList;
  ngOnInit() {
    console.log(this.data);
    const country = require("../../country.json");
    this.countryList=country;
  }

  close() {
    // alert("close called...");
     this.dialogRef.close();
   }


   editRemove(value:string) {
     if(value=="PUT"){
     // alert(" PUT ID --->"+value);
      console.log("Update Portal ID --->"+this.model.portalId);
      this.alexService.myPortalupdate(this.model)
      .subscribe(
          data => {
            console.log('update output-->'+data.status);

              if(data.status=="success"){
                console.log('successfully updated...');
                this.dialogRef.close();
              //  this.alertService.success("successfully updated");
             //   setTimeout(() => {
             //     this.alertService.success("");
             //   }, 1000);

              }
         
              
          },
          error => {
            this.dialogRef.close();
              alert('Udate Error !!!!');
          }
      );
 
     }
     if(value=="DELETE"){
      console.log("Portal ID --->"+this.model.portalId);
      this.alexService.myPortaldelete(this.model.portalId)
      .subscribe(
          data => {
           // this.dialogRef.close();
           this.dialogRef.close();

          },
          error => {
              alert('Error !!!!');
          }
      );
 

     }
     this.dialogRef.close();
   }
}
