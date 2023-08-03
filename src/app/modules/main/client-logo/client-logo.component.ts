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
  filtered:any[]=[]
  searchTerm:string = ''
  
 onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filtered = this.clientLogos;
    } else {
      this.filtered = this.clientLogos.filter((data) =>
        data.name.toLowerCase().includes(this.searchTerm.trim().toLowerCase()) ||
        data.email.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
      );
    }
  }

  fileForm = new FormGroup({
    fileInput: new FormControl('', Validators.required)
  });

  
  images: { id: number, base64String: string, url: string }[] = [];


  constructor(private clientLogoService:SharedService) {}


  ngOnInit(): void {
    this.getAllClientLogos();
  }


  onDelete(id: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.clientLogoService.deleteClientLogo(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getAllClientLogos();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
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
    if(this.showUpdateInput == false){
      this.showUpdateInput = true;
      this.id = id
    }
    else{
      this.showUpdateInput = false
    }

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