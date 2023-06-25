import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientLogoService } from 'src/app/services/client-logo.service';


@Component({
  selector: 'app-add-logo',
  templateUrl: './add-logo.component.html',
  styleUrls: ['./add-logo.component.scss']
})
export class AddLogoComponent {
  fileForm = new FormGroup({
    fileInput: new FormControl('', Validators.required)
  });

  constructor(private clientLogoService: ClientLogoService) { }

  selectedFile: File | null = null;
  base64Image: string | null = null;

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

  uploadLogo(): void {
    if (this.base64Image) {
      this.clientLogoService.addClientLogo(this.base64Image).subscribe(
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
