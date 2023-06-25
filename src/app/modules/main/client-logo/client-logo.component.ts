import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { DomSanitizer } from '@angular/platform-browser';
import { ClientLogoService } from 'src/app/services/client-logo.service';
import { SharedService } from 'src/app/services/shared.service';

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
  clientLogos: any[] ;
  showUpdateInput = false;
  updatedLogoText = '';
  selectedFile: File | null = null;
  base64Image: string | null = null;

  
  images: { id: number, base64String: string, url: string }[] = [];


  constructor(private http: HttpClient,private sanitizer:DomSanitizer,private clientLogoService:SharedService) {}


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
      (logos: any[]) => {
        this.clientLogos = logos;
        console.log(this.clientLogos)
      },
      (error: any) => {
        console.log('Error retrieving client logos:', error);
      }
    );
  }

  updateLogo(){

  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.convertToBase64();
  }

  convertToBase64(): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.base64Image = reader.result as string;
      console.log(this.base64Image)
    };
    reader.readAsDataURL(this.selectedFile);
  }

  edit(id:number){
    this.showUpdateInput = true;
    this.uploadLogo(id)
  }

  uploadLogo(id:number): void {

    if (this.base64Image) {
      this.clientLogoService.updateClientLogo(this.base64Image,id).subscribe(
        response => {
          console.log('Logo uploaded successfully:', response);
        },
        error => {
          console.error('Failed to upload logo:', error);
        }
      );
    }
  }

}