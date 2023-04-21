import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-client-logo',
  templateUrl: './client-logo.component.html',
  styleUrls: ['./client-logo.component.css']
})
export class ClientLogoComponent implements OnInit {

  imageURL: string='';
  
  images: { id: number, base64String: string, url: string }[] = [];


  constructor(private http: HttpClient,private sanitizer:DomSanitizer) {}

  ngOnInit(): void {
    this.getImages()
  }


  getImages(): void {
    this.http.get<any[]>('http://localhost:3000/logo').subscribe(
      (response) => {
        this.images = response.map((image) => ({
          id: image.id,
          base64String: image.base64String,
          url: `data:$image/{jpeg};base64,/${image.base64String}`
        }));
      });
  }
  onDelete(id: number): void {
    this.http.delete(`http://localhost:3000/logo/${id}`).subscribe(
      (response) => {
        console.log('Image deleted successfully.',response);
        this.getImages();
      });
  }
}