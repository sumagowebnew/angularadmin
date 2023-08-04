import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
interface Contact {
  [key: string]: string;
}
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contactForm: FormGroup;
  mobileNumbers: Contact[] = [];
  emailIds: Contact[] = [];
  addresses: Contact[] = [];
  DataPresent:Boolean = false;

  constructor(private formBuilder: FormBuilder, private service: SharedService) {
    this.contactForm = this.formBuilder.group({
      email_id: ['', [Validators.required, Validators.email]], // Add Validators for email field.
      address: ['', Validators.required], // Add Validators for address field.
    });
  }
  
  ngOnInit(): void {
    this.service.getContactDetails().subscribe((res)=>{
      if(res == null){
        alert("Contact Details exists already")
      }
    })
    this.getLength()
  }

  getLength(){
    this.service.getContactDetails().subscribe((res:any) =>{
      if (res && Object.keys(res).length > 0) {
        console.log('Data is present in the response.');
        this.DataPresent = true
      } else {
        console.log('No data found in the response.');
      }
    },
    (error) => {
      console.error('Error fetching contact details:', error);
    }
  );
  }

  addField(field: string) {
    if (field === 'mobile_no') {
      const index = this.mobileNumbers.length + 1;
      this.mobileNumbers.push({ [index]: '' });
    } else if (field === 'email_id') {
      const index = this.emailIds.length + 1;
      this.emailIds.push({ [index]: '' });
    } else if (field === 'address') {
      const index = this.addresses.length + 1;
      this.addresses.push({ [index]: '' });
    }
  }

  removeField(field: string, index: number) {
    if (field === 'mobile_no') {
      this.mobileNumbers.splice(index, 1);
    } else if (field === 'email_id') {
      this.emailIds.splice(index, 1);
    } else if (field === 'address') {
      this.addresses.splice(index, 1);
    }
  }
  onSubmit() {
    const mobile_no = `[${this.getFormattedData(this.mobileNumbers)}]`;
    const address = `[${this.getFormattedData(this.addresses)}]`;
    const email_id = `[${this.getFormattedData(this.emailIds)}]`;

    this.service.addContactDetails(mobile_no, address, email_id).subscribe(
      (response) => {
        console.log('Contact details added successfully:', response);
        // Reset the form and clear the arrays after successful submission
        this.contactForm.reset();
        this.mobileNumbers = [];
        this.emailIds = [];
        this.addresses = [];
        alert('Record Added')
      },
      (error) => {
        console.error('Error adding contact details:', error);
      }
    );
  }

  private getFormattedData(contactArray: Contact[]): string {
    return contactArray.map((item) => JSON.stringify(item)).join(',');
  }

onReset(){
  this.contactForm.reset()
}
}
