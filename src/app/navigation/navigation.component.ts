import { Component, OnInit,ViewChild,HostListener } from '@angular/core';
import { MenuItem } from '../menuItem.model';
import { SubMenuItem } from '../subMenuItem.model';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule, Routes, Router ,ActivatedRoute} from "@angular/router";
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../user/user.service';
 
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 
  searchText:any;
  heroes = [
    { id: 11, name: 'CHanaka Nice', country: 'India' },
    { id: 12, name: 'MNarco' , country: 'USA'},

  ];
menuItems: MenuItem[];
menuItemsIcons:MenuItem[];
@ViewChild('sidenav',{ read: true, static: false }) sidenav: MatSidenav;

showToggle: string;
  mode: string;
  openSidenav:boolean;
  private screenWidth$ = new BehaviorSubject<number>
    (window.innerWidth);

  public menu1 = false;
  public notSelected=true;
  //private count=0;
  static showParent: any;
  public username;
  private password;
  constructor( private router: Router , 
    private userService: UserService,
    public route: ActivatedRoute) { 
    //this.count=route.firstChild.children.length;
    
    route.url.subscribe(() => {
      console.log("test 1 -->"+route.firstChild.children.length);
      console.log("test 2 -->"+route.children.length);

     });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }
  key1:number;
  key2:number;
  key3:number;
  key4:number;

  key5:number;
  key6:number;
  key7:number;

  ngOnInit() {

    console.log("before calling...ngOnInit......"); 
    this.userService.reportLoad()
      .subscribe(
          data => {
              this.key1=data['key1'];
              this.key2=data['key3'];
              this.key3=data['key3'];
              this.key4=data['key4'];
              this.key5=data['key5'];
              this.key6=data['key6'];
              this.key7=data['key7'];

              console.log("Output-->"+data['key1']);
         },
          error => {
              alert('Error !!!!');
          }
      );

    this.getScreenWidth().subscribe(width => {
      if (width < 640) {
       this.showToggle = 'show';
       this.mode = 'over';
       this.openSidenav = false;
     }
     else if (width > 640) {
       this.showToggle = 'hide';
       this.mode = 'side';
       this.openSidenav = true;
     }
   });

   this.username=localStorage.getItem("currentusername");
   this.password=localStorage.getItem("currentpassword");
if(this.username!=null || this.username!="") { 
  if(this.username=="admin" && this.password=="admin@123"){
    //admin login
   this.menuItems = [
     new MenuItem("DashBoard","/landingpage"),
     new MenuItem("Reports","employeelist"),
     new MenuItem("Issues","datatableissues"),

     new MenuItem("Log Out","logout"),
     new MenuItem("",""),

   ]


   this.menuItemsIcons = [
     new MenuItem("./assets/images/menu.png","/landingpage"),
     new MenuItem("./assets/images/menu.png","/landingpage"),
     new MenuItem("./assets/images/menu.png","/landingpage"),
     new MenuItem("./assets/images/logout.png","login"),
     new MenuItem('./assets/images/null.png',""),


   ]
  }
  if(this.username=="alex" && this.password=="alex@123"){

   // Alex login
   this.menuItems = [
     new MenuItem("DashBoard","/landingpage"),
     new MenuItem("Job Poral","jobportal"),
     new MenuItem("Issues","datatableissues"),
     new MenuItem("Server Info","serverinfo"),
     new MenuItem("My Contacts","connection"),
     new MenuItem("My Bank","bank"),

     new MenuItem("Log Out","logout"),
     new MenuItem("",""),

   ]


   this.menuItemsIcons = [
     new MenuItem("./assets/images/menu.png","/landingpage"),
     new MenuItem("./assets/images/menu.png","/landingpage"),
     new MenuItem("./assets/images/menu.png","/landingpage"),
     new MenuItem("./assets/images/menu.png","/landingpage"),
     new MenuItem("./assets/images/menu.png","/landingpage"),
     new MenuItem("./assets/images/menu.png","/landingpage"),
     new MenuItem("./assets/images/logout.png","login"),
     new MenuItem('./assets/images/null.png',""),


   ]
 }

 if(this.username=="user" && this.password=="user"){
   // User login
   this.menuItems = [
     new MenuItem("DashBoard","/landingpage"),
     new MenuItem("Issues","datatableissues"),
     new MenuItem("Log Out","logout"),
     new MenuItem("",""),

   ]
   this.menuItemsIcons = [
     new MenuItem("./assets/images/menu.png","/landingpage"),
     new MenuItem("./assets/images/menu.png","employeelist"),
     new MenuItem("./assets/images/logout.png","login"),
     new MenuItem('./assets/images/null.png',""),


   ]
 }
}
else{
  alert("Pls login");
}
   


   

  }

  showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

 
 


}
