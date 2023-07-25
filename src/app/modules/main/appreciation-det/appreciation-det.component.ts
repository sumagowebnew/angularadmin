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
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteAppreciation(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getAllappreciation();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
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
