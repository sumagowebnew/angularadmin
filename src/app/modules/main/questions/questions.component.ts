import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  questions:any[]=[
    {
      
      name:'Mohak Pardeshi',
      email:'m@gmail.com',
      question:'Apply for job',
      date:new Date('2023-04-12'),
    },
    {
      name:'Manav Joshi',
      email:'manav@gmail.com',
      question:'Apply for Fulltime DataScience Internship',
      date:new Date('2023-04-12'),
    }

  ];
  deletecontact(index: number){
    this.questions.splice(index, 1);
  }
}
