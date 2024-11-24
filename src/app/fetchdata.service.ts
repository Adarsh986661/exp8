import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {     
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  } 
}
