import { Component } from '@angular/core';

@Component({
  selector: 'app-training-det',
  templateUrl: './training-det.component.html',
  styleUrls: ['./training-det.component.scss']
})
export class TrainingDetComponent {
  trainings:any[]=[
    {
      
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date:new Date('2023-04-12'),
    },
    {
     
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date:new Date('2023-04-12'),
    }

  ];
  deletecontact(index: number){
    this.trainings.splice(index, 1);
  }
}
