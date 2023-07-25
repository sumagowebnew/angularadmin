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
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteEvent(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getEvent();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }
}

