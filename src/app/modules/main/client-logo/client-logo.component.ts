import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  id:number

  fileForm = new FormGroup({
    fileInput: new FormControl('', Validators.required)
  });

  
  images: { id: number, base64String: string, url: string }[] = [];


  constructor(private clientLogoService:SharedService) {}


  ngOnInit(): void {
    this.getAllClientLogos();
  }


  onDelete(id: number): void {
    this.clientLogoService.deleteClientLogo(id).subscribe(
      (response) => {
        console.log('Logo deleted successfully.',response);
        alert('Logo Deleted')
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
    this.id = id
  }

  uploadLogo(id:number): void {
      id = this.id
    if (this.base64Image) {
      this.clientLogoService.updateClientLogo(this.base64Image,id).subscribe(
        response => {
          console.log('Logo updated successfully:', response);
          this.getAllClientLogos()
        },
        error => {
          console.error('Failed to update logo:', error);
        }
      );
    }
  }

}