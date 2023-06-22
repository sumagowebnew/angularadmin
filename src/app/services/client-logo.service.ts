import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientLogoService {
  private apiUrl = 'http://localhost/main-main/main/clientLogo';

  constructor(private http: HttpClient) {}

  addClientLogo(imageData: string): Observable<any> {
    const formData = new FormData();
    formData.append('image_file', imageData);
    return this.http.post(`${this.apiUrl}/add`, formData);
  }
  
  getAllClientLogos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-all-record`);
  }

  deleteClientLogo(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
  }
}
