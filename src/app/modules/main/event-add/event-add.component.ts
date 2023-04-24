import { Component } from '@angular/core';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent {
  eventName: string='';
  eventDate: string='';
  eventImage: string='';

  handleImageInput(event: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.eventImage = reader.result as string;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  submitEvent() {
    const event = {
      name: this.eventName,
      date: this.eventDate,
      image: this.eventImage
    };
  
    // Submit the event to the server or store it locally
    // Replace the console log with your submission logic
    console.log(event);
  
    // Clear the form fields
    this.eventName = '';
    this.eventDate = '';
    this.eventImage = '';  }
}
