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
      circulumvitae: ' ',
      duration: '3 months',
      letter: 'https://assets.qwikresume.com/cover-letters/images/photo-editor-cover-letter-sample.jpg',
      date: new Date('2023-04-12'),
    },
    {
      name: 'mitisha',
      email: 'abc@gmail.com',
      mobno: '9999778665',
      technology: 'JAVA',
      position: 'Developer',
      circulumvitae: ' ',
      duration: '3 months',
      letter: 'https://assets.qwikresume.com/cover-letters/images/photo-editor-cover-letter-sample.jpg',
      date: new Date('2023-04-12'),
    }

  ];
  deleteEnquiry(index: number) {
    this.career.splice(index, 1);
  }
}
