import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { DomSanitizer } from '@angular/platform-browser';
import { ClientLogoService } from 'src/app/services/client-logo.service';

interface ClientLogo {
  id: number;
  image: string;
}


@Component({
  selector: 'app-client-logo',
  templateUrl: './client-logo.component.html',
  styleUrls: ['./client-logo.component.scss']
})
export class ClientLogoComponent implements OnInit {

  imageURL: string='';
  clientLogos: ClientLogo[] = [];

  
  images: { id: number, base64String: string, url: string }[] = [];


  constructor(private http: HttpClient,private sanitizer:DomSanitizer,private clientLogoService:ClientLogoService) {}


  ngOnInit(): void {
    this.getAllClientLogos();
  }


  onDelete(id: number): void {
    this.clientLogoService.deleteClientLogo(id).subscribe(
      (response) => {
        console.log('Image deleted successfully.',response);
        this.getAllClientLogos();
      });
  }


  getAllClientLogos() {
    this.clientLogoService.getAllClientLogos().subscribe(
      (logos: ClientLogo[]) => {
        this.clientLogos = logos;
        console.log(this.clientLogos)
      },
      (error: any) => {
        console.log('Error retrieving client logos:', error);
      }
    );
  }

}