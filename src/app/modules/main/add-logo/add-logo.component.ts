import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-add-logo',
  templateUrl: './add-logo.component.html',
  styleUrls: ['./add-logo.component.scss']
})
export class AddLogoComponent {
  fileForm = new FormGroup({
    fileInput: new FormControl('', Validators.required)
  });

  constructor(private clientLogoService: SharedService) { }

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
    };
    reader.readAsDataURL(this.selectedFile);
  }

  uploadLogo(): void {
    if (this.base64Image) {
      this.clientLogoService.addClientLogo(this.base64Image).subscribe(
        response => {
          alert('logo Added')
          this.onReset()
        },
        error => {
          alert(`Failed to upload record :${error}`);
        }
      );
    }
  }
  onReset() {
    this.fileForm.reset();
  }

}
