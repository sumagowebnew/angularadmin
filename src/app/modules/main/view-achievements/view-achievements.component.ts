import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-view-achievements',
  templateUrl: './view-achievements.component.html',
  styleUrls: ['./view-achievements.component.scss']
})
export class ViewAchievementsComponent implements OnInit {
  constructor(private service:SharedService){}
  ngOnInit(): void {
    this.getAchievements()
  }
  filtered:any[]=[]
  searchTerm:string = ''
  
 onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filtered = this.achievements;
    } else {
      this.filtered = this.achievements.filter((data) =>
        data.title.toLowerCase().includes(this.searchTerm.trim().toLowerCase()) ||
        data.email.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
      );
    }
  }
  achievements:any[]=[];
  deletecontact(index: number){
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteAchievements(index).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getAchievements();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }

    getAchievements(){
      this.service.getAchievements().subscribe((res)=>{
        this.achievements = res
        console.log(res)
      },
      err=>{
        console.log("error",err)
      })
    }
}
