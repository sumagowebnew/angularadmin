import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';



@Component({
  selector: 'app-designation-details',
  templateUrl: './designation-details.component.html',
  styleUrls: ['./designation-details.component.scss']
})
export class DesignationDetailsComponent implements OnInit {
  designations: any[] = [];
  newDesignation: string;
  selectedDesignation: any;
  updatedDesignation: string;

  constructor(private service:SharedService) { }
  ngOnInit(): void {
    this.getDesignations()
  }

  addDesignation() {
    if (this.newDesignation) {
      this.service.addDesignation(this.newDesignation).subscribe(
        response => {
          console.log('Designation added successfully');
          this.newDesignation = ''; // Clear the input field
          this.getDesignations(); // Refresh the list of designations
        },
        error => {
          console.error('Failed to add designation', error);
        }
      );
    }
  }

  updateDesignation() {
    if (this.selectedDesignation && this.updatedDesignation) {
      this.service.updateDesignation(this.selectedDesignation.id, this.updatedDesignation).subscribe(
        response => {
          console.log('Designation updated successfully');
          this.selectedDesignation = null; // Clear the selected designation
          this.updatedDesignation = ''; // Clear the input field
          this.getDesignations(); // Refresh the list of designations
        },
        error => {
          console.error('Failed to update designation', error);
        }
      );
    }
  }

  deleteDesignation(designation: any) {
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteDesignation(designation).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getDesignations();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }

  editDesignation(designation: any) {
    this.selectedDesignation = designation;
    this.updatedDesignation = designation.designation;
  }

  getDesignations() {
    this.service.getDesignations().subscribe(
      response => {
        this.designations = response.data; 
        console.log(this.designations)
      },
      error => {
        console.error('Failed to get designations', error);
      }
    );
  }

}
