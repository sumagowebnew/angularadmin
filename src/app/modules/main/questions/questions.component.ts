import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

interface Question {
  id: number;
  name: string;
  email: string;
  question: string;
  is_active: number;
  created_at: string | null;
  updated_at: string | null;
}

interface ApiResponse {
  data: Question[];
  message: string;
  status: string;
  status_code: number;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
  questions:Question[]=[];

  constructor(private service:SharedService){}
  ngOnInit(): void {
    this.getQuestions();
  }
  getQuestions() {
    this.service.getQuestions().subscribe(
      (res: ApiResponse) => {
        if (res.status === 'success') {
          this.questions = res.data;
        }
      },
      (error: any) => {
        console.log('Error retrieving contact enquiries:', error);
      }
    );  
  }
  deleteQuestion(id:number){
    this.service.deleteQuestion(id).subscribe(res=>{
      alert('Successfully Deleted Equiry');
      this.getQuestions()
    })
  }


}
