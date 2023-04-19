import { Component } from '@angular/core';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent {
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
