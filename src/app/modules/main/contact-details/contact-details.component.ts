import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  mobileNumbers: { [key: string]: string }[] = [{}];
  emailIds: { [key: string]: string }[] = [{}];
  addresses: { [key: string]: string }[] = [{}];


  constructor(private sharedService: SharedService) { }
  
  addContactDetails() {
    const formattedMobileNumbers = [this.convertToKeyValue(this.mobileNumbers)];
    const formattedEmailIds = [this.convertToKeyValue(this.emailIds)];
    const formattedAddresses = [this.convertToKeyValue(this.addresses)];

    this.sharedService.addContactDetails(formattedMobileNumbers, formattedEmailIds, formattedAddresses).subscribe(
      (response) => {
        // Handle success response
        console.log('Contact details added successfully!', response);
      },
      (error) => {
        // Handle error response
        console.error('Error while adding contact details:', error);
      }
    );
  }

  private convertToKeyValue(items: { [key: string]: string }[]): { [key: string]: string } {
    const result: { [key: string]: string } = {};
    items.forEach((item, index) => {
      result[(index + 1).toString()] = item[index + 1] || ''; // The index starts from 0, but keys should start from 1
    });
    return result;
  }

  addNewContact() {
    this.mobileNumbers.push({});
    this.emailIds.push({});
    this.addresses.push({});
  }


  removeLastRow() {
    this.mobileNumbers.pop();
    this.emailIds.pop();
    this.addresses.pop();
  }
  
  addNewMobileNumber() {
    this.mobileNumbers.unshift({});
  }

  addNewEmailId() {
    this.emailIds.unshift({});
  }

  addNewAddress() {
    this.addresses.unshift({});
  }
  removeMobileNumber(index: number) {
    this.mobileNumbers.splice(index, 1);
  }

  removeEmailId(index: number) {
    this.emailIds.splice(index, 1);
  }

  removeAddress(index: number) {
    this.addresses.splice(index, 1);
  }
}
