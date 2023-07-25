import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-trainee-tdetails',
  templateUrl: './trainee-tdetails.component.html',
  styleUrls: ['./trainee-tdetails.component.scss']
})
export class TraineeTdetailsComponent implements OnInit {
  ngOnInit(): void {
    this.getTraineeDetails()
  }

  constructor(private service:SharedService){}
  trainees:any[]=[];

  getTraineeDetails(){
    this.service.getTraineeTeam().subscribe(data => {this.trainees=data
   alert('data loaded')});
  }

  deleteTrainee(id: number){
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteTraineeTeam(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getTraineeDetails();
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
