import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit{
constructor(private apiService:SharedService)
{}
  ngOnInit(): void {
   this.getContactData()
  }

  getContactData(){
    this.apiService.getContactDetails().subscribe((res)=>{
      console.log(res)
    })
  }
}
