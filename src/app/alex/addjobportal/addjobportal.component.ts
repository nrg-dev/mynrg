import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { AlexService } from '../alex.service';
import { Router } from '@angular/router';
import { Portal } from 'src/app/_models';

@Component({
  selector: 'app-addjobportal',
  templateUrl: './addjobportal.component.html',
  styleUrls: ['./addjobportal.component.css']
})
export class AddjobportalComponent implements OnInit {
  countryList:any;
  model: any = {};
  portal:Portal;
  constructor(
    private router: Router,
    private alexService: AlexService,
    private dialogRef: MatDialogRef<AddjobportalComponent>,
  ) { }

  ngOnInit() {
    const country = require("../../country.json");
    this.countryList=country;
  }

  close() {
   // alert("close called...");
    this.dialogRef.close();
  }

  myPortalReg() {
    this.model.createdPerson=localStorage.getItem("currentusername");
    //this.dialogRef.close(this.form.value);
    this.model.currentUser=localStorage.getItem('currentusername');
    console.log('............controller myPortalReg....');
    this.alexService.myPortalReg(this.model)
              .subscribe(
                  data => {
                  //   this.portal=data;
                      console.log('return value -->'+data);
                     // alert("Successfully Saved ");
                      this.model.portalname=null;
                    //  if(this.portal.status=="success") {
                          console.log('If User Exits');
                       //   this.userExsistdialog = 'block';
                       //   this.loading = false;
                   //   }
  
                    
                  },
                  error => {
                    alert("Server error...");
  
                     // this.otherErrordialog = 'block';
                     // this.loading = false;
                  });
    this.dialogRef.close();
}
}
