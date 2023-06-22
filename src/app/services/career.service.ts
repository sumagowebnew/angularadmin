import { Injectable } from '@angular/core';
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  private apiUrl = `${BASE_URL}`
  constructor() { }
}
