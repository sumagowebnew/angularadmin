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
  filtered:any[]=[]
  searchTerm:string = ''
  
  constructor(private service:SharedService){}
  ngOnInit(): void {
    this.getQuestions();
  }
  getQuestions() {
    this.service.getQuestions().subscribe(
      (res: ApiResponse) => {
        if (res.status === 'success') {
          this.questions = res.data;
          this.filtered = this.questions
        }
      },
      (error: any) => {
        console.log('Error retrieving contact enquiries:', error);
      }
    );  
  }
  deleteQuestion(id:number){
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteQuestion(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getQuestions();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }


  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filtered = this.questions;
    } else {
      this.filtered = this.questions.filter((data) =>
        data.name.toLowerCase().includes(this.searchTerm.trim().toLowerCase()) ||
        data.email.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
      );
    }
  }

}
