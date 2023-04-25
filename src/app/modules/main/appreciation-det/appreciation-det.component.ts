import { Component } from '@angular/core';

@Component({
  selector: 'app-appreciation-det',
  templateUrl: './appreciation-det.component.html',
  styleUrls: ['./appreciation-det.component.scss']
})
export class AppreciationDetComponent {
  appreciations:any[]=[
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
    this.appreciations.splice(index, 1);
  }
}
