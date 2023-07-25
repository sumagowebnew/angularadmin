import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-mou-details',
  templateUrl: './mou-details.component.html',
  styleUrls: ['./mou-details.component.scss']
})
export class MouDetailsComponent implements OnInit {
  ngOnInit(): void {
    this.getMou()
  }

  constructor(private service:SharedService){}

  mouDetails: any[] = [];
   
  getMou() {
    this.service.getMou().subscribe((Mous:[]) =>{
      this.mouDetails = Mous;
    })
  }

  deleteMou(id:number) {
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteMou(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getMou();
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

