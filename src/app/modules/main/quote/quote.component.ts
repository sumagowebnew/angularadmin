import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

interface Quote {
  id: number;
  name: string;
  mobile_no:number;
  email: string;
  service: string;
  address:string;
  comment:string;
  is_active: number;
  created_at: string | null;
  updated_at: string | null;
}

interface ApiResponse {
  data: Quote[];
  message: string;
  status: string;
  status_code: number;
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[];

  constructor(private service:SharedService){}
  ngOnInit(): void {
    this.getQuote();
  }
  getQuote() {
    this.service.getQuote().subscribe(
      (res: ApiResponse) => {
        if (res.status === 'success') {
          this.quotes = res.data;
        }
      },
      (error: any) => {
        console.log('Error retrieving Quote :', error);
      }
    );  
  }
  deleteQuote(id:number){
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteQuote(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getQuote();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }


  filtered:any[]=[]
  searchTerm:string = ''
  
 onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filtered = this.quotes;
    } else {
      this.filtered = this.quotes.filter((data) =>
        data.name.toLowerCase().includes(this.searchTerm.trim().toLowerCase()) ||
        data.email.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
      );
    }
  }



}
