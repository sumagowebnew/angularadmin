import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-training-det',
  templateUrl: './training-det.component.html',
  styleUrls: ['./training-det.component.scss']
})
export class TrainingDetComponent implements OnInit {
  ngOnInit(): void {
    this.getTrainingDet();
  }
  constructor(private service:SharedService){}
  trainings:any[]=[];

  getTrainingDet(){
    this.service.getTraining().subscribe(training =>{
      this.trainings=training;
      console.log(this.trainings);
    })
  }
  deleteTrainingDet(id: number){
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteTraining(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getTrainingDet();
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
