import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-addjobportal',
  templateUrl: './addjobportal.component.html',
  styleUrls: ['./addjobportal.component.css']
})
export class AddjobportalComponent implements OnInit {

  constructor(

    private dialogRef: MatDialogRef<AddjobportalComponent>,
  ) { }

  ngOnInit() {
  }

  close() {
   // alert("close called...");
    this.dialogRef.close();
  }

  myPortalReg() {
    //this.dialogRef.close(this.form.value);

    this.dialogRef.close();
}
}
