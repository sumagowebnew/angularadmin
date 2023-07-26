import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']
})
export class ViewNewsComponent implements OnInit {
  news: any[] = [];
  filteredNews: any[] = [];
  searchTerm: string = '';
  constructor(private service: SharedService) { }
  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.service.getNews().subscribe(
      (response) => {
        this.news = response;
        this.filteredNews = this.news;
        console.log('News retrieved successfully', this.news);
      },
      (error) => {
        console.error('Error retrieving news', error);
      }
    );
  }

  deleteNews(id: number) {
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteNews(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getNews();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }
  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredNews = this.news;
    } else {
      this.filteredNews = this.news.filter((news) =>
        news.title.toLowerCase().includes(this.searchTerm.trim().toLowerCase()) ||
        news.news_paper.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
      );
    }
  }
}
