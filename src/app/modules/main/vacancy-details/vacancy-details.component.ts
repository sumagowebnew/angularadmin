import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
interface vacancy{
position:string
experience:number
}
@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.scss']
})
export class VacancyDetailsComponent implements OnInit {
  vacancy:any[]
  searchTerm:string = ''

  ngOnInit(): void {
this.getVacancy()
  }
  constructor(private apiService:SharedService){}
  getVacancy(){
    this.apiService.getVacancies().subscribe((res)=>{
      this.vacancy = res.data
      console.log(this.vacancy);
    })
  }
  deleteVacancy(id){
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.apiService.deleteVacancy(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getVacancy();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }

  onSearch(){
    
  }
}
