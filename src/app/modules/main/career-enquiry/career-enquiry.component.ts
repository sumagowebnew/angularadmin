import { Component } from '@angular/core';

@Component({
  selector: 'app-career-enquiry',
  templateUrl: './career-enquiry.component.html',
  styleUrls: ['./career-enquiry.component.scss']
})
export class CareerEnquiryComponent {
  career: any[] = [
    {
      name: 'purva',
      email: 'abc@gmail.com',
      mobno: '8673478465',
      technology: 'PHP',
      position: 'Developer',
      circulumvitae: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      duration: '3 months',
      letter: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date: new Date('2023-04-12'),
    }

  ];
  deleteEnquiry(index: number) {
    this.career.splice(index, 1);
  }
}
