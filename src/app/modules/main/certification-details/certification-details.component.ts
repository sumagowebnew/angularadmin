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
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteCertificate(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getCertificate();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }

}
