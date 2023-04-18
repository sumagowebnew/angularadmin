
import { Component, OnInit } from '@angular/core';
import { Inquiry } from './inquiry.model';
import { InquiryService } from './inquiry.service';


@Component({
  selector: 'app-free-consulation',
  templateUrl: './free-consultation.component.html',
  styleUrls: ['./free-consultation.component.scss']
})
export class FreeConsultationComponent implements OnInit{
  inquiries: Inquiry[];

  constructor(private inquiryService: InquiryService) { 
    this.inquiries = [];
  }

  ngOnInit() {
    this.inquiries = this.inquiryService.getInquiries();
  }

  deleteInquiry(inquiryId: number) {
    this.inquiryService.deleteInquiry(inquiryId);
    this.inquiries = this.inquiryService.getInquiries();
  }

}
