import { Component } from '@angular/core';

@Component({
  selector: 'app-development-teamdetails',
  templateUrl: './development-teamdetails.component.html',
  styleUrls: ['./development-teamdetails.component.scss']
})
export class DevelopmentTeamdetailsComponent {
  developments:any[]=[];
  deletecontact(index: number){
    this.developments.splice(index, 1);
  }
}
