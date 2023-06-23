import { Component } from '@angular/core';
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

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  portfolios;
  loading: boolean = false;

  constructor(private service:SharedService){}
  ngOnInit() {
    this.loadPortfolios();
  }

  loadPortfolios() {
    this.loading = true;
    this.service.getPortfolios().subscribe(
      (data) => {
          this.portfolios = data;
          console.log(this.portfolios);       
      })}

}

