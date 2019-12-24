import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from'@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from "@angular/router";
import { CustomMaterialModule } from "./core/material.module";

import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService,UserService } from './_services/index';
import { AlexModule } from './alex/alex.module';


const appRoutes: Routes = [
  //{ path: '', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard Component' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login Component' }},
  { path: 'landingpage', component: LandingpageComponent, data: { title: 'Landing Component' },
    children: [
      { path: '', loadChildren: () => AlexModule }

    ],
  },

  { path: '**', redirectTo: 'login' }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    LandingpageComponent,   
    DashboardComponent,
   // AlertComponent
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true , onSameUrlNavigation: 'reload'} // <-- debugging purposes only
    ),
    CustomMaterialModule,

    AlexModule
  ],
  providers: [AlertService,AuthenticationService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
