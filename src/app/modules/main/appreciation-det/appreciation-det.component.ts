import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

interface Appreciation {
  id: number;
  image: string;
  created_at: string | null;
}

@Component({
  selector: 'app-appreciation-det',
  templateUrl: './appreciation-det.component.html',
  styleUrls: ['./appreciation-det.component.scss']
})


export class AppreciationDetComponent {
  
  imageURL: string='';
  appreciations: Appreciation[] = [];

  
  images: { id: number, base64String: string, url: string }[] = [];


  constructor(private service:SharedService) {}


  ngOnInit(): void {
    this.getAllappreciation();
  }


  onDelete(id: number): void {
    this.service.deleteAppreciation(id).subscribe(
      (response) => {
        console.log('Image deleted successfully.',response);
        this.getAllappreciation();
      });
  }


  getAllappreciation() {
    this.service.getAppreciation().subscribe(
      (res:Appreciation[]) => {
        this.appreciations = res;
        console.log(this.appreciations)
      },
      (error: any) => {
        console.log('Error retrieving appreciation :', error);
      }
    );
  }

}
