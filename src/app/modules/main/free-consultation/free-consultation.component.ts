
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';



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

  
  filtered:any[]=[]
  searchTerm:string = ''
  
  consultations:Consultation[]=[]
  

  constructor(private service: SharedService) { }

 

  getConsultations() {
    this.service.getConsultation().subscribe(
      (res: ApiResponse) => {
        if (res.status === 'success') {
          this.consultations = res.data;
          this.filtered = this.consultations
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

  
  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.consultations);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'contacts.xlsx');
  }
  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filtered = this.consultations;
    } else {
      this.filtered = this.consultations.filter((data) =>
        data.name.toLowerCase().includes(this.searchTerm.trim().toLowerCase()) ||
        data.email.toLowerCase().includes(this.searchTerm.trim().toLowerCase()) ||
        JSON.stringify(data.mobile_no).includes(this.searchTerm.trim())      );
    }
  }

}
