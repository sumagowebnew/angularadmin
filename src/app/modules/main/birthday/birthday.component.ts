import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

interface Birthday {
  id:number;
  image:string;
  created_at:string;
  updated_at:string;
}

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {
  ngOnInit(): void {
    this.getBirthday();
  }
  
  constructor(private service: SharedService) {}
  
  birthdays: Birthday[];
  
  getBirthday() {
    this.service.getBirthday().subscribe((data) => {
      this.birthdays = data;
      console.log(this.birthdays);
    });
  }
  
  deleteBirthday(id: number) {
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteBirthday(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getBirthday();
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

