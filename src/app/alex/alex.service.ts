import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portal, Bank } from '../_models';

@Injectable()
export class AlexService {    

//private commonURL = 'http://35.160.115.237:8093/mynrg-server/';
  private commonURL = 'http://localhost:8093/mynrg-server/';

constructor(private http: HttpClient) { }

//*********************Portal************************

// Save 
myPortalReg(portal: Portal){
    console.log('service....');
    return this.http.post<Portal>(this.commonURL+'myPortalReg',portal);
}

// Load 
myPortaltable(){
    return this.http.get(this.commonURL+'myPortaltable');
}

// get 
myPortalview(id:number){
    return this.http.get<Portal>(this.commonURL+'myPortalview?id='+id);
}

// Update 
myPortalupdate(portal: Portal){
    return this.http.put<Portal>(this.commonURL+'myPortalupdate',portal);

}

// Remove 
myPortaldelete(id:number){
    return this.http.delete<String>(this.commonURL+'myPortaldelete?id='+id);
}

//*********************Connection************************

// Save  
saveConnection(portal: Portal){
    console.log('service....');
    return this.http.post<Portal>(this.commonURL+'connection/save',portal);
}

// Load 
loadConnection(){
    return this.http.get(this.commonURL+'connection/load');
}

// get 
getConnection(id:number){
     return this.http.get<Portal>(this.commonURL+'connection/get?id='+id);
}

// Update 
updateConnection(portal: Portal){
    return this.http.put<Portal>(this.commonURL+'connection/update',portal);

}

// Remove 
removeConnection(id:number){
    return this.http.delete<String>(this.commonURL+'connection/remove?id='+id);
}


//*********************Serverinfo************************

// Save  
saveServerinfo(portal: Portal){
    console.log('service....');
    return this.http.post<Portal>(this.commonURL+'serverinfo/save',portal);
}

// Load 
loadServerinfo(){
    return this.http.get(this.commonURL+'serverinfo/load');
}

// get 
getServerinfo(id:number){
     return this.http.get<Portal>(this.commonURL+'serverinfo/get?id='+id);
}

// Update 
updateServerinfo(portal: Portal){
    return this.http.put<Portal>(this.commonURL+'serverinfo/update',portal);

}

// Remove 
removeServerinfo(id:number){
    return this.http.delete<String>(this.commonURL+'serverinfo/remove?id='+id);
}

//*********************Bank************************

// Save  
saveBank(bank: Bank){
    console.log('service....');
    return this.http.post<Bank>(this.commonURL+'bank/save',bank);
}

// Load 
loadBank(){
    return this.http.get(this.commonURL+'bank/load');
}

// get 
getBank(id:number){
     return this.http.get<Bank>(this.commonURL+'bank/get?id='+id);
}

// Update 
updateBank(bank: Bank){
    return this.http.put<Portal>(this.commonURL+'bank/update',bank);

}

// Remove 
removeBank(id:number){
    return this.http.delete<String>(this.commonURL+'bank/remove?id='+id);
}


}
