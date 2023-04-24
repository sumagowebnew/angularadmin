import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  convertImageToBase64(file: File, callback: (base64String: string | null, error?: Error) => void): void {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (result !== null && typeof result === 'string') {
        const base64String = result 
        callback(base64String);
      } else {
        callback(null, new Error('Failed to read file.'));
      }
    };
    reader.onerror = (error) => {
      callback('error');
    };
    reader.readAsDataURL(file);
  }
  saveImageToServer(base64String: string | null): void {
    if (base64String !== null) {
      const data = { logo:base64String };
      this.http.post('http://localhost:3000/logo', data).subscribe(
        (response) => {
          console.log('Image saved successfully.',response);
        });
  }
}
  

  convertImageAndSave(file: File): void {
    this.convertImageToBase64(file, (base64String, error) => {
      if (error) {
        console.error(error);
      } else {
        this.saveImageToServer(base64String);
      }
    });
  }



}
