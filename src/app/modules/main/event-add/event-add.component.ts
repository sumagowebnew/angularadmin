import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent {
  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.eventForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventDate: ['', Validators.required],
      eventImage: ['']
    });
  }

  submitEvent() {
    if (this.eventForm.valid) {
      // Retrieve the form values
      const eventName = this.eventForm.get('eventName').value;
      const eventDate = this.eventForm.get('eventDate').value;
      
      // Perform any necessary data processing or validation
      // ...
      
      // Create an object to send to the server
      const eventData = {
        eventName: eventName,
        eventDate: eventDate
      };
      
      // Send the event data to the server using HttpClient
      this.http.post('/api/events', eventData).subscribe(
        (response) => {
          // Handle the success response
          console.log('Event added successfully', response);
        },
        (error) => {
          // Handle the error response
          console.error('Failed to add event', error);
        }
      );
    }
  }

  handleImageInput(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      
      // Perform any necessary file handling or validation
      // ...
      
      // Display the selected image (optional)
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageElement = document.getElementById('eventImagePreview') as HTMLImageElement;
        if (imageElement) {
          imageElement.src = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }
}

