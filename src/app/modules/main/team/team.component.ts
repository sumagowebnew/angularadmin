import { Component } from '@angular/core';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  admins:any[]=[
    {
      name:'Demo Name',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      designation:'Team Leader',
      qulification:'MSC. Computer Science',
      experience:'Industry:6 year',
      status:'Active',
      date: '2023-04-12'
    },
    {
      name:'Aemo Name',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      designation:'Learning and Development',
      qulification:'BSC Computer Science',
      experience:'Industry:5 year',
      status:'Active',
      date: '2023-05-12'
    }

  ];

  editcontact(index: number){
    this.admins.splice(index, 1);
  }
  deletecontact(index: number){
    this.admins.splice(index, 1);
  }
  }

