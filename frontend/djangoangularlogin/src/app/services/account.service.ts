import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../User'
import { Response } from '../Response';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8000/api/auth/login/';

  constructor(private http:HttpClient) {}

  loginUser(user: User): Observable<Response>{
    return this.http.post<Response>(this.apiUrl, user, httpOptions)
  }
}
