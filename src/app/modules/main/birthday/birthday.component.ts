import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent {
 
    birthdays = [
      {
       
        // serialNumber: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
        birthdayImage: 'Happy Birthday',
        date: '2023-04-19'
        
      },
      {
        
        // serialNumber: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
        birthdayImage: 'Birthday Cake',
        date: '2023-03-02'
      },
      {
        
        // serialNumber: 3,
        image: 'path/to/image3.jpg',
        birthdayImage: 'Balloons',
        date: '2023-02-15'
      }
      
    ];
  
    onDelete(index: number) {
      this.birthdays.splice(index, 1);    }
  }

