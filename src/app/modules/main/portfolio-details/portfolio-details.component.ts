import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

interface Portfolios {
  id: number;
  title: string;
  description: string;
  image: string;
  website_link:string;
  website_status:number;
  is_active: number;
  created_at: string | null;
  updated_at: string | null;
}

interface ApiResponse {
  data: Portfolios[];
  message: string;
  status: string;
  status_code: number;
}

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit{
 
  portfolio:Portfolios[]=[];

  constructor(private service:SharedService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getPortfolio()
  }

  getPortfolio(){
    console.log("methhod works") 
    this.service.getPortfolios().subscribe(res=> (res: ApiResponse) => {
      if (res.status === 'success') {
        this.portfolio = res.data;
      }
    },
    (error: any) => {
      console.log('Error retrieving contact enquiries:', error);
    })
  }

}
