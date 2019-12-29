import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portal } from '../_models';

@Injectable()
export class AlexService {    
    private commonURL = 'http://localhost:8093/mynrg-server/';

    constructor(private http: HttpClient
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
    return this.http.put<Portal>(this.commonURL+'myPortalupdate',portal);

}

// Remove portal

myPortaldelete(id:number){
    return this.http.delete<String>(this.commonURL+'myPortaldelete?id='+id);
}

}
