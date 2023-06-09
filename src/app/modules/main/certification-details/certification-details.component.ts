import { Component } from '@angular/core';

@Component({
  selector: 'app-certification-details',
  templateUrl: './certification-details.component.html',
  styleUrls: ['./certification-details.component.css']
})
export class CertificationDetailsComponent {
  certificate: any[]=[
    {
      title:'Amrit MOU',
      collegename:'Amrit College',
      image: 'https://encrypteds-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date:new Date('2022-09-08'),
    },
  ];
  deletecertificate(index: number){
    this.certificate.splice(index, 1);
  }
  editcertificate(index: number){
    this.certificate.splice(index, 1);
  }
    }
