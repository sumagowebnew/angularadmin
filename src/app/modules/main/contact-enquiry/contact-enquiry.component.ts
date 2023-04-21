import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-enquiry',
  templateUrl: './contact-enquiry.component.html',
  styleUrls: ['./contact-enquiry.component.scss']
})
export class ContactEnquiryComponent {
  contacts:any[]=[
    {
      name:'purva',
      mobno:'86734267846',
      email:'abc@gmail.com',
      message:'hello im angular developer',
      date:new Date('2023-04-12'),
    }

  ];
  deletecontact(index: number){
    this.contacts.splice(index, 1);
  }
}
