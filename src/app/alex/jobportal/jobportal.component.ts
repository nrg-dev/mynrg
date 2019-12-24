import { Component, OnInit } from '@angular/core';
import {  ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { DataTablesModule } from 'angular-datatables';
import * as jQuery from 'jquery';
import { User } from 'src/app/_models';
 

@Component({
  selector: 'app-jobportal',
  templateUrl: './jobportal.component.html',
  styleUrls: ['./jobportal.component.css']
})
export class JobportalComponent implements OnInit {
  model: any = {};
  user:User;
  view= true
  add=false
  dataList : any = [];
  constructor() { }

  dtOptions: DataTables.Settings = {};
  ngOnInit() {

    for (let i = 0; i < 50; i++) {
      console.log ("Block statement execution no." + i);
      
     
      this.dataList[i] = 
      { 
      Company:'CUST001',
      Contact :' WIROTO CRAFT',
      Country : '+62 878-2277-7490',
      state : '+62 675-777-8998',
      Phone : 'No 2, Main Street,Jakarta,Indonesia',
      email :  'Indonesia',
      address : 'Jakarta',
      name : 'nrgadmin@neotural.com',
      status : 'active',
      }
    }

  
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    }

        //document.getElementById('id01').style.display='none';

  }

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;


public openAsPDF(){
  alert("open pdf");
  
}
public addNew(){
  this.view= false
  this.add= true  
 /* document.getElementById('data').style.display='none';
  document.getElementById('id01').style.display='block';
  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    document.getElementById('data').style.display='block';
    if (event.target == modal) {
      modal.style.display = "none";
      document.getElementById('data').style.display='block';

    }
  }*/
}

public save(){
  alert("save ");

}

public back(){
  this.view= true
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
