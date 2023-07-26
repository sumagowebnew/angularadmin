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
 filtered: any[] = [];
 searchTerm: string = '';
  portfolios: Portfolios[] = [];
  loading: boolean = false;
  image:string

  constructor(private service: SharedService,private router:Router) {}

  ngOnInit() {
    this.loadPortfolios();
  }
  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filtered = this.portfolios;
    } else {
      this.filtered = this.portfolios.filter((data) =>
        data.title.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
      );
    }
  }

  loadPortfolios() {
    this.loading = true;
    this.service.getPortfolios().subscribe(
      (data: any[]) => {
        if (Array.isArray(data)) {
          this.portfolios = data;
          this.filtered = this.portfolios
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
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deletePortfolio(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.loadPortfolios();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }
  
}
