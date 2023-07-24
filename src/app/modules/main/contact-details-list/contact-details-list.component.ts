import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-contact-details-list',
  templateUrl: './contact-details-list.component.html',
  styleUrls: ['./contact-details-list.component.scss']
})
export class ContactDetailsListComponent implements OnInit {
  dataGrid: any = null; // Change here
  ngOnInit(): void {
    this.getContactData()
  }
  constructor(private sharedService: SharedService) { }

  getContactData() {
    this.sharedService.getContactDetails().subscribe((res) => {
      this.dataGrid = res
      console.log(this.dataGrid);
    })
  }

  deleteData(id) {
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.sharedService.deleteContactDetails(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
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

  
  enableEditMode(count: any) {
    count.editMode = true;
  }

  cancelEdit(count: any) {
    count.editMode = false;
  }
  selectedItem: any = null;

openUpdateForm(item: any) {
  // Clone the item to prevent updating the original data directly
  this.selectedItem = { ...item };
}

  updateContactDetails(updatedData: any) {
    const id = updatedData.id;
    const mobileNumbers = [updatedData.mobile_no];
    const emailIds = [updatedData.email_id];
    const addresses = [updatedData.address];
  
    this.sharedService.updateContactDetails(id, mobileNumbers, emailIds, addresses).subscribe(
      (res) => {
        console.log('Updated Successfully');
        this.getContactData();
        this.selectedItem = null;
      },
      (error) => {
        console.error('Error while updating data:', error);
      }
    );
  }
  
  cancelUpdate() {
    // Clear the selectedItem and close the update form
    this.selectedItem = null;
  }
  
}