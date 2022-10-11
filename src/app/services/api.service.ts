import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient)  { }

  login (username: string, password: string): Observable <any>{
    return this.httpClient.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/login',{
        username, 
        password
    })
  }

  searchChar (name: string): Observable<any>{  
    return this.httpClient.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/mirror/rickandmorty',{
      endpoint: `character/?name=${name}`
    })
  }


}
