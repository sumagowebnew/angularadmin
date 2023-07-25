import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';

interface Applicant {
  id:number;
  name: string;
  email: string;
  mobile_no: string;
  technology_choice: string;
  position: string;
  cv: {
    file_name: string;
    download_url: string;
  };
  cover_letter: {
    file_name: string;
    download_url: string;
  };
  duration: string;
}

interface ApiResponse {
  data: Applicant[];
  message: string;
  status: string;
  status_code: number;
}

@Component({
  selector: 'app-career-enquiry',
  templateUrl: './career-enquiry.component.html',
  styleUrls: ['./career-enquiry.component.scss']
})
export class CareerEnquiryComponent implements OnInit {
  careerEnquiries: Applicant[]=[];

  constructor(private careerEnquiryService: SharedService) { }

  ngOnInit() {
    this.getAllCareerEnquiries();
  }

  getAllCareerEnquiries() {
    this.careerEnquiryService.getAllCareerEnquiries().subscribe(
      (data: any) => {
        this.careerEnquiries = data.applicants;
        console.log(data); 
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteCareerEnquiry(id: number) {
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.careerEnquiryService.deleteCareerEnquiry(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getAllCareerEnquiries();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }
 // Function to export data as Excel
 exportAsExcel(): void {
  const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('career-enquiries-table'));
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(data, 'career_enquiries.xlsx');
}


  // Function to export data as PDF
}
