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
    this.service.deleteTraineeTeam(id).subscribe((res)=>{
      alert('Feleted successfully')
    })
  }
 
}
