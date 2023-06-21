import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = '{{sumagoadmin}}contact'
  constructor(private http:HttpClient) { }

  getAllContactEnquiries(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-all-record`);
  }

  deleteContactEnquiry(id: string): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}
