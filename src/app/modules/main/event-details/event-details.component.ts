import { Component } from '@angular/core';
import { EventDetails } from './event-del.model';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  
  eventDetails: EventDetails[] = [];
  

}

