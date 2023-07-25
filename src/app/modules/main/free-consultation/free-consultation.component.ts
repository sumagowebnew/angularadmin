
import { Component, OnInit } from '@angular/core';
import { Inquiry } from './inquiry.model';
import { InquiryService } from './inquiry.service';
import { SharedService } from 'src/app/services/shared.service';

interface Consultation {
  id: number;
  name: string;
  mobile_no:number;
  email: string;
  topic: string;
  is_active: number;
  created_at: string | null;
  updated_at: string | null;
}

interface ApiResponse {
  data: Consultation[];
  message: string;
  status: string;
  status_code: number;
}


@Component({
  selector: 'app-free-consulation',
  templateUrl: './free-consultation.component.html',
  styleUrls: ['./free-consultation.component.scss']
})
export class FreeConsultationComponent implements OnInit{
  ngOnInit(): void {
    this.getConsultations();
  }

  
  consultations:Consultation[]=[]
  

  constructor(private service: SharedService) { }

 

  getConsultations() {
    this.service.getConsultation().subscribe(
      (res: ApiResponse) => {
        if (res.status === 'success') {
          this.consultations = res.data;
        }
      },
      (error: any) => {
        console.log('Error retrieving Consultation enquiries:', error);
      }
    );  
  }
  deleteConsultation(id:number){
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteConsultation(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getConsultations();
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
