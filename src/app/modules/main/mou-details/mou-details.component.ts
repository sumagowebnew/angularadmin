import { Component } from '@angular/core';

@Component({
  selector: 'app-mou-details',
  templateUrl: './mou-details.component.html',
  styleUrls: ['./mou-details.component.scss']
})
export class MouDetailsComponent {
  mous:any[]=[
    {
      title:'Sumago infotech ',
     collegename:'Sakal newspaper',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date:new Date('2023-04-12'),
    },
    {
      title:'Sumago Infotech old news ',
      collegename:'Lokmat newspaper',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date:new Date('2008-10-05'),
    },
    {
      title:'Sumago infotech latest news ',
      collegename:'Divyabharti newspaper',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date:new Date('2023-04-24'),
    }

  ];
  deletecontact(index: number){
    this.mous.splice(index, 1);
  }
}
