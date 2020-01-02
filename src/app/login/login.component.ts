import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  user:User;
  loading = false;
  passwordtype="password";

  constructor(  private router: Router,
    private alertService: AlertService,
    ) { }

  ngOnInit() {
    console.log("login and logout...");
   //document.getElementById('id01').style.display='block'";
   //document.getElementById('id01').style.display='block';
   this.alertService.clear();

    this.model.currentusername='';
    this.model.currentpassword='';
    localStorage.setItem('currentusername',null);
    localStorage.setItem('currentpassword',null);
  }

  onClickSubmit(){
    this.alertService.clear();
    let message="Invalid User Name or Password";
   // console.log("user name : password"+this.model.currentusername+this.model.currentpassword);
    localStorage.setItem('currentusername',this.model.currentusername);
    localStorage.setItem('currentpassword',this.model.currentpassword);

    if(
    (this.model.currentusername=="admin" && this.model.currentpassword=="admin@123")
    ||
    (this.model.currentusername=="user" && this.model.currentpassword=="user")
    ||
    this.model.currentusername=="alex" && this.model.currentpassword=="alex@123"){
     
      this.router.navigate(['/landingpage']);


    }
    else {
      this.alertService.error(message);

    }

  }

  forgetPassword(){

  }

  showPassword(){
    if (this.passwordtype=="text"){
      this.passwordtype="password";

    }
    if (this.passwordtype=="password"){
      this.passwordtype="text";

    }
   // var x = document.getElementById("myInput");
  //if (x.type === "password") {
  //  x.type = "text";
  //} else {
  //  x.type = "password";
  //}
  }
}
