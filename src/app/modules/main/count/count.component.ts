import { Component, OnInit } from '@angular/core';
import { Count } from './count.model';
import { CountService } from './count.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  counts: Count[] =[];



  constructor(private service: SharedService) { }

  ngOnInit(): void {
   this.getCount()
  }


  getCount(){
    this.service.getCount().subscribe(res=>{
      this.counts = res.data;
      console.log(this.counts);
      
    })
  }

  enableEditMode(count: any) {
    count.editMode = true;
  }

  cancelEdit(count: any) {
    count.editMode = false;
  }

  updateCount(count: any) {
    this.service.updateCounts(count.clients,count.projects,count.cup_of_coffee,count.awards).subscribe(() => {
      count.editMode = false;
    });
  }

  
      // TODO: Handle edit operation

  
  
}
