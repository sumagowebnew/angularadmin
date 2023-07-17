import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-certification-details',
  templateUrl: './certification-details.component.html',
  styleUrls: ['./certification-details.component.css']
})
export class CertificationDetailsComponent implements OnInit,  AfterViewInit {
  dataSource: any;
  ngOnInit(): void {
    this.getCertificate()
  }
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() { 
    this.dataSource.sort = this.sort;
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
