import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://sumagoweb.sumagotest.in/login';

   constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    const body = {
      username: username,
      password: password
    };
    return this.http.post<any>(this.apiUrl, body, httpOptions);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    try {
      const tokenPayload:any = jwt_decode(token);
      return tokenPayload.exp > Date.now() / 1000;
    } catch (error) {
      console.log('Error decoding token:', error);
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  //API INTEGRATION PART
  url= "http://localhost:8000/employee/";
  getData(): Observable<any>{
    return this.http.get<any>(`${this.url}find`);
  }

}
