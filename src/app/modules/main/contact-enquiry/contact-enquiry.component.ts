import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-enquiry',
  templateUrl: './contact-enquiry.component.html',
  styleUrls: ['./contact-enquiry.component.scss']
})
export class ContactEnquiryComponent {
  contacts:any[]=[
    // {
    //   name:'Purva Diwate',
    //   mobno:'86734267846',
    //   email:'abc@gmail.com',
    //   message:'Hello! Im angular developer',
    //   date:new Date('2022-09-08'),
    // },
    // {
    //   name:'Mitisha Patel' ,
    //   mobno:'99219029336',
    //   email:'demo@gmail.com',
    //   message:'Hi! Im react developer',
    //   date:new Date('2021-08-31'),
    // },
    // {
    //   name:'Aditi Sonawane',
    //   mobno:'86734267846',
    //   email:'trial@gmail.com',
    //   message:'Hey, Im angular developer',
    //   date:new Date('2019-02-24'),
    // },
    

  ];
  deletecontact(index: number){
    this.contacts.splice(index, 1);
  }

  constructor(private contactService:ContactService){}

  getContactEnquiries(){
    this.contactService.getAllContactEnquiries().subscribe(res=>{
        this.contacts = res
    })
  }
  deleteContactEnquiry(id:string){
    this.contactService.deleteContactEnquiry(id).subscribe(res=>{
      alert('Successfully Deleted Equiry');
      this.getContactEnquiries()
    })
  }
}
