import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday-form',
  templateUrl: './birthday-form.component.html',
  styleUrls: ['./birthday-form.component.scss']
})
export class BirthdayFormComponent {
  imageUrl: string="";

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  onSubmit() {
    const data = {
      imageUrl: this.imageUrl,
    
    };

    console.log(data);
    // Add logic to save the data to the server or perform other actions
  }

  onReset() {
    this.imageUrl = '';
}
}
