import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from '../_models';
//mport { User, Portal } from '../../_models/index';
//import { ServerURL } from './url';
//import { Portal } from '../_models';
import { environment } from "src/environments/environment";

 
@Injectable()
export class UserService {    

  //  private commonURLIssues = 'http://localhost:8093/mynrg-server/issues/';
    //private commonURLIssues = 'http://35.160.115.237:8093/mynrg-server/issues/';

      private issuesPath = 'issues';

    //  let arr4: Array<Dropbox> = [];
    constructor(private http: HttpClient
       // private globalsURL: ServerURL
        ) { }

//------- Save Portal ----------
save(issue: Issue){
    console.log('service....');
   // return this.http.post<Issue>(this.commonURLIssues+'save',issue);
    return this.http.post<Issue>(
        `${environment.apiUrl}${"issues/save"}`,
        issue
      ); 
}

// Load all the data
load(){
    console.log("before calling load");
    //return this.http.get(this.commonURLIssues+'load');
    return this.http.get(`${environment.apiUrl}${this.issuesPath+"/load"}`);

    console.log("after calling load");
 
}

// get only one data
get(id:number){
    //return this.http.get<Issue>(this.commonURLIssues+'get?id='+id);
    return this.http.get<Issue>(`${environment.apiUrl}${this.issuesPath+"/get"+'?id='+id}`);

}

// Update portal

update(issue: Issue){
   // return this.http.put<Issue>(this.commonURLIssues+'update',issue);
    return this.http.put<Issue>(
        `${environment.apiUrl}${this.issuesPath+"/update"}`,
        issue
      );
}

// Remove portal

remove(id:number){
    //return this.http.delete<String>(this.commonURLIssues+'remove?id='+id);
    return this.http.delete<String>(`${environment.apiUrl}${"issuesPath/remove"+'?id='+id}`); 

}

}
