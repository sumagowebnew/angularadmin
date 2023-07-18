import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { MatTableDataSource } from '@angular/material/table';
export interface Contact {
  id: number;
  address: string;
  email_id: string[];
  mobile_no: string[];
  created_at: string;
  updated_at: string;
}
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'address', 'email_id', 'mobile_no', 'created_at', 'updated_at'];
  dataSource:[]
  contactData: any[]; // Define the contactData array
  responseData: any; 

constructor(private apiService:SharedService)
{}

ngOnInit(): void {
  this.getContactData();
}
isArray(value: any): boolean {
  return Array.isArray(value);
}
getContactData(): void {
  this.apiService.getContactDetails().subscribe((res: any[]) => {
    this.responseData = res; // Assign the response data to contactData array
  });
}
deleteContact(id){
  this.apiService.deleteContactDetails(id).subscribe((res)=>
  {
    console.log("success")
  })
}
}
