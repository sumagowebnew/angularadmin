import { Component } from '@angular/core';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']
})
export class ViewNewsComponent {
 newss:any[]=[
    {
      title:'Sumago infotech ',
      newspaper:'sakal newspaper',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date:new Date('2023-04-12'),
    },
    {
      title:'Sumago infotech ',
      newspaper:'sakal newspaper',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date:new Date('2023-04-12'),
    }

  ];
  deletecontact(index: number){
    this.newss.splice(index, 1);
  }
}
