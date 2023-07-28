import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-contact-details-list',
  templateUrl: './contact-details-list.component.html',
  styleUrls: ['./contact-details-list.component.scss']
})
export class ContactDetailsListComponent implements OnInit {
  dataGrid: any // Change here
  ngOnInit(): void {
    this.getContactData()
  }
  constructor(private sharedService: SharedService, private router: Router) { }
  address: any[]
  contact: any[]
  EmailId: any[]
  data: any[]
  getContactData() {
    this.sharedService.getContactDetails().subscribe((res) => {
      this.dataGrid = res
      console.log(res.id);

      const addressObject = this.dataGrid.address;
      const addressValues = addressObject.map(obj => Object.values(obj)[0])
      this.address = addressValues

      // Access the email values
      const emailObject = this.dataGrid.email_id;
      const emailValues = emailObject.map(obj => Object.values(obj)[0])
      this.EmailId = emailValues

      // Access the Contact values
      const contactObject = this.dataGrid.mobile_no;
      const contactValues = contactObject.map(obj => Object.values(obj)[0]);
      this.contact = contactValues;


      this.data = [{ 'EmailId': this.EmailId, 'contacts': this.contact, 'address': this.address }]

      console.log(this.data)
    })
  }

  deleteData(id) {
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.sharedService.deleteContactDetails(id).subscribe(
        (res) => {
          console.log('Deleted Successfully', res.id);
          this.getContactData();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }

  updateContactDetails(id: number) {
    this.router.navigate(['main/update-contact',id])
  }


}