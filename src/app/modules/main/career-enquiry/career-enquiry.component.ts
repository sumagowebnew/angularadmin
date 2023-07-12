import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

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
    this.careerEnquiryService.deleteCareerEnquiry(id).subscribe(
      () => {
        console.log(`Career enquiry with ID ${id} deleted successfully.`);
        alert('Deleted SuccessFully')
      },
      (error) => {
        console.error(`Error deleting career enquiry with ID ${id}.`, error);
      }
    );
  }
}
