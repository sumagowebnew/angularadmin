import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-certification-details',
  templateUrl: './certification-details.component.html',
  styleUrls: ['./certification-details.component.css']
})
export class CertificationDetailsComponent implements OnInit {
  ngOnInit(): void {
    this.getCertificate()
  }

  constructor(private service:SharedService){}

  certificateDetails: any[] = [];
   
  getCertificate() {
    this.service.getCertificates().subscribe((certificates:[]) =>{
      this.certificateDetails = certificates;
    })
  }

  deleteCertificate(id:number) {
    this.service.deleteCertificate(id).subscribe(() =>{
      alert('Delete Success')
          this.getCertificate();
        })
  }

}
