import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';



interface Contact {
  id: number;
  name: string;
  mobile_no: string;
  email: string;
  messege: string;
  is_active: number;
  created_at: string | null;
  updated_at: string | null;
}

interface ApiResponse {
  data: Contact[];
  message: string;
  status: string;
  status_code: number;
}

@Component({
  selector: 'app-contact-enquiry',
  templateUrl: './contact-enquiry.component.html',
  styleUrls: ['./contact-enquiry.component.scss']
})
export class ContactEnquiryComponent implements OnInit {
  contacts:Contact[]=[];
  deletecontact(index: number){
    this.contacts.splice(index, 1);
  }

  constructor(private contactService:SharedService){}
  ngOnInit(): void {
this.getContactEnquiries()
  }

  getContactEnquiries() {
    this.contactService.getAllContactEnquiries().subscribe(
      (res: ApiResponse) => {
        if (res.status === 'success') {
          this.contacts = res.data;
        }
      },
      (error: any) => {
        console.log('Error retrieving contact enquiries:', error);
      }
    );  
  }
  deleteContactEnquiry(id:number){
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.contactService.deleteContactEnquiry(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getContactEnquiries();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }
  contact:any[] = [
    // Sample data for demonstration
    { id: 1, name: 'John Doe', mobile_no: '1234567890', email: 'john@example.com', message: 'Hello!', created_at: '2023-07-25' },
    { id: 2, name: 'Jane Smith', mobile_no: '9876543210', email: 'jane@example.com', message: 'Hi there!', created_at: '2023-07-24' }
  ];

  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.contacts);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'contacts.xlsx');
  }
}
