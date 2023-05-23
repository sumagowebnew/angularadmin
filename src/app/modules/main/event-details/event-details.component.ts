import { Component } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  events: any[] = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date:new Date('2023-04-15')
    },
    {
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/...',
<<<<<<< HEAD
      date: new Date('2023-03-31')
    },
    {
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/...',
      date: new Date('2023/10/02')
=======
      date: new Date('2023-04-15')
    },
    {
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/...',
      date:new Date('2023-04-15')
>>>>>>> 8a355bd39e7a51deaab3217c306b71c40fe70e4c
    }
  ];

  deleteEvent(index: number) {
    this.events.splice(index, 1);
  }
}

