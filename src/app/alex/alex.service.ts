import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portal } from '../_models';
//mport { User, Portal } from '../../_models/index';
//import { ServerURL } from './url';
//import { Portal } from '../_models';


@Injectable()
export class AlexService {    
    suburl:string;
   // private commonURL = this.globalsURL.serverURL;
    private commonURL = 'http://localhost:8093/mynrg-server/';

    
    //  let arr4: Array<Dropbox> = [];
    constructor(private http: HttpClient
       // private globalsURL: ServerURL
        ) { }

//------- Save Portal ----------
myPortalReg(portal: Portal){
    console.log('service....');
    return this.http.post<Portal>(this.commonURL+'myPortalReg',portal);
}

// Load all the data
myPortaltable(){
    return this.http.get(this.commonURL+'myPortaltable');
}

// get only one data
myPortalview(id:number){
    return this.http.get<Portal>(this.commonURL+'myPortalview?id='+id);
}

// Update portal

myPortalupdate(portal: Portal){
    return this.http.put<String>(this.commonURL+'myPortalupdate',portal);

}

// Remove portal

myPortaldelete(id:number){
    return this.http.delete<String>(this.commonURL+'myPortaldelete?id='+id);
}

}
