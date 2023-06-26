import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


interface Contact {
  id: number;
  name: string;
  mobile_no: string;
  email: string;
  messege: string;
  is_active: number;
  created_at: string | null;
  updated_at: string | null;
}

interface ApiResponse {
  data: Contact[];
  message: string;
  status: string;
  status_code: number;
}

@Component({
  selector: 'app-contact-enquiry',
  templateUrl: './contact-enquiry.component.html',
  styleUrls: ['./contact-enquiry.component.scss']
})
export class ContactEnquiryComponent implements OnInit {
  contacts:Contact[]=[
  ];
  deletecontact(index: number){
    this.contacts.splice(index, 1);
  }

  constructor(private contactService:SharedService){}
  ngOnInit(): void {
this.getContactEnquiries()
  }

  getContactEnquiries() {
    this.contactService.getAllContactEnquiries().subscribe(
      (res: ApiResponse) => {
        if (res.status === 'success') {
          this.contacts = res.data;
        }
      },
      (error: any) => {
        console.log('Error retrieving contact enquiries:', error);
      }
    );  
  }
  deleteContactEnquiry(id:number){
    this.contactService.deleteContactEnquiry(id).subscribe(res=>{
      alert('Successfully Deleted Equiry');
      this.getContactEnquiries()
    })
  }
}
