import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

interface Event{
  id:number;
  image:string;
  created_at:string;
  updated_at:string;
}
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  events: Event[] = [];

  ngOnInit(): void {
    this.getEvent();
  }
  
  constructor(private service: SharedService) {}
  
  
  getEvent() {
    this.service.getEvent().subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });
  }
  
  deleteEvent(id: number) {
    this.service.deleteEvent(id).subscribe((res) => {
      console.log("Successfully deleted Event");
      alert("Event Deleted Successfully");
      this.getEvent(); // Update the list of Events after deleting
    });
  }
}

