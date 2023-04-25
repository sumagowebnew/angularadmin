import { Injectable } from '@angular/core';
import { Inquiry } from './inquiry.model';
import { Sort } from '@angular/material/sort';


@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  inquiries: Inquiry[] = [
    {
      id: 1,
      name: 'Aditi Sonawane',
      email: 'aditi.ss@example.com',
      mobileNumber: '555-1234',
      topic: 'Consultation request',
      date: new Date('2023-04-15')
    },
    {
      id: 2,
      name: 'Ameya Chaudhari',
      email: 'amee.p_c@example.com',
      mobileNumber: '555-5678',
      topic: 'Question about services',
      date: new Date('2023-04-17')
    },
    {
      id: 3,
      name: 'Demo',
      email: 'demo@example.com',
      mobileNumber: '555-9012',
      topic: 'Request for more information',
      date: new Date('2023-04-17')
    }
  ]
    sortData:Inquiry[]

    constructor(){
      this.sortData=this.inquiries.slice();
    }

  getInquiries(): Inquiry[] {
    return this.inquiries;
  }

  deleteInquiry(inquiryId: number) {
    // const inquiryIndex = this.inquiries.findIndex(inquiry => inquiry.id === inquiryId);
    // if (inquiryIndex !== -1) {
    //   this.inquiries.splice(inquiryIndex, 1);
      
        this.inquiries.splice(inquiryId, 1);
      }
    }
  

