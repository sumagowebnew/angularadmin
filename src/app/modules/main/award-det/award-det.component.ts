import { Component } from '@angular/core';

@Component({
  selector: 'app-award-det',
  templateUrl: './award-det.component.html',
  styleUrls: ['./award-det.component.scss']
})
export class AwardDetComponent {
  awards: any[] = [
    {
      
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYtLDlvHW2qWZR_qy8PmZ_rz-TPcVUGidsLRfe_Ck&s',
      date: new Date('2023-04-12'),
    }

  ];
  deleteEnquiry(index: number) {
    this.awards.splice(index, 1);
  }
}
