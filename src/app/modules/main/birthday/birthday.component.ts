import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent {
 
    birthdays = [
      {
       
        serialNumber: 1,
        image: 'path/to/image.jpg',
        birthdayImage: 'Happy Birthday',
        date: '2023-04-19'
        
      },
      {
        
        serialNumber: 2,
        image: 'path/to/image2.jpg',
        birthdayImage: 'Birthday Cake',
        date: '2023-03-02'
      },
      {
        
        serialNumber: 3,
        image: 'path/to/image3.jpg',
        birthdayImage: 'Balloons',
        date: '2023-02-15'
      }
      
    ];
  
    onDelete(birthday: any) {
      // Code to delete the selected birthday
    }
  }

