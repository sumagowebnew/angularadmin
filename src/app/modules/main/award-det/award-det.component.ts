import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-award-det',
  templateUrl: './award-det.component.html',
  styleUrls: ['./award-det.component.scss']
})
export class AwardDetComponent implements OnInit {
  ngOnInit(): void {
    this.getAwards()
  }
  constructor(private service:SharedService){}

  awards:any[]=[];

  getAwards(){
    this.service.getAward().subscribe(data => this.awards=data)
  }

  deleteAward(id: number){
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteAward(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getAwards();
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
