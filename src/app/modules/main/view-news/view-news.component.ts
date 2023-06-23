import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']
})
export class ViewNewsComponent implements OnInit {
 news:any[]=[];
 constructor(private service:SharedService){}
  ngOnInit(): void {
    this.getNews();
  }

 getNews(): void {
  this.service.getNews().subscribe(
    (response) => {
      this.news = response;
      console.log('News retrieved successfully', this.news);
    },
    (error) => {
      console.error('Error retrieving news', error);
    }
  );
}

 deleteNews(id:number){
  this.service.deleteNews(id).subscribe((res)=>{
    console.log("success")
    alert("Success deleting record")
    this.getNews()
  })
 }
}
