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
    this.service.deleteBirthday(id).subscribe((res) => {
      console.log("Successfully deleted birthday");
      alert("Birthday Deleted Successfully");
      this.getBirthday(); // Update the list of birthdays after deleting
    });
  }
  
  }

