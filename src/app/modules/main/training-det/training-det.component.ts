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
    this.service.deleteTraining(id).subscribe(res => {
      alert('Training deleted');
      this.getTrainingDet();
    })
  }
}
