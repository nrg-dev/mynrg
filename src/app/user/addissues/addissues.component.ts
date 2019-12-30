import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Router } from '@angular/router';
import { Issue } from 'src/app/_models';
import { UserService } from '../user.service';
import { AlertService } from 'src/app/alert/alert.service';

@Component({
  selector: 'app-addissues',
  templateUrl: './addissues.component.html',
  styleUrls: ['./addissues.component.css']
})
export class AddissuesComponent implements OnInit {
  countryList:any;
  priorityList:any;
  model: any = {};
  issue:Issue; 
  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,

    private dialogRef: MatDialogRef<AddissuesComponent>,
  ) { }

  ngOnInit() {
    const country = require("../../country.json");
    const priority = require("../../priority.json");
    this.countryList=country;
    this.priorityList=priority;
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.model.createdPerson=localStorage.getItem("currentusername");
    this.model.currentUser=localStorage.getItem('currentusername');
    this.model.issueStatus="New";
    console.log('............controller save....');
    this.userService.save(this.model)
              .subscribe(
                  data => {
                      console.log('return value -->'+data);
                      this.model.portalname=null;
                          console.log('If User Exits'); 
                          this.alertService.success("Saved.");
                          setTimeout(() => {
                            this.alertService.clear();
                          }, 1000);
                    
                  },
                  error => {
                    alert("Server error...");
  
                  });
    this.dialogRef.close();
}
}
