import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

interface Portfolios {
  id: number;
  title: string;
  description: string;
  image: string;
  website_link: string;
  website_status: number;
  is_active: number;
  created_at: string | null;
  updated_at: string | null;
}

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit{
 
  portfolios: Portfolios[] = [];
  loading: boolean = false;
  image:string

  constructor(private service: SharedService,private router:Router) {}

  ngOnInit() {
    this.loadPortfolios();
  }

  loadPortfolios() {
    this.loading = true;
    this.service.getPortfolios().subscribe(
      (data: any[]) => {
        if (Array.isArray(data)) {
          this.portfolios = data;
          // Log the image string for each portfolio
          this.portfolios.forEach(portfolio => {
              this.image = portfolio.image
            console.log(portfolio.image);
          });
        } else {
          console.error('Invalid response format:', data);
        }
      },
      (error: any) => {
        console.error(error);
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }


  editPortfolio(portfolioId: number) {
    this.router.navigate(['main/update-portfolio', portfolioId]);
  }
  
  deletePortfolio(id:number){
    this.service.deletePortfolio(id).subscribe(
      (response) => {
        console.log('Portfolio deleted successfully.',response);
        this.loadPortfolios();
      });
  }
  
}
