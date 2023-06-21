import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { DomSanitizer } from '@angular/platform-browser';
import { ClientLogoService } from 'src/app/services/client-logo.service';

@Component({
  selector: 'app-client-logo',
  templateUrl: './client-logo.component.html',
  styleUrls: ['./client-logo.component.scss']
})
export class ClientLogoComponent implements OnInit {

  imageURL: string='';
  clientLogos: string[] = ['/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcNDQcHBwcHBwcHBw0HBwcHBw8IDQcOFhEWFhYRHxcZHTQjGBoxGxUVJDMtJSk3OjY5GCszPTMsQygtLisBCgoKDg0NFQ8NFy8lHx8rMC0rNiw3NzcvNy4rLSsrKystKy0rLSsrNysrKystMi4tKy0rLSsuLSsrKy03Ky0tK//AABEIALcBEwMBEQACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAAAAQYDBQcEAv/EADsQAQACAQECCAoJBQEAAAAAAAABAgMEBREGEhMWITFRsjNBVFVxdJKU0uIHFBU1UnKBpNEjMkKxwWH/xAAaAQEBAQADAQAAAAAAAAAAAAAAAQUCAwQG/8QAMxEBAAECAgUJCQEBAQAAAAAAAAECAwQRFDFxgfAFFSEkMlFioeESEzNBUmGRscE00SL/2gAMAwEAAhEDEQA/AOZ9G+NAAAAUAAFAAFAEAAAAAAAAAABUAAQAEAAAABAAUAAAAFABQABRAAAAAAAAAAAAAAUBAEABAAAAAQFAAABQAUABFAAAUAAAAAAAAEAAAAUBAEABAAAAAAAAUAFQFBFAAAUAAAAAAAAAAAEAAAAVAEABAAAAAAUAAFAFEAFAAAAAFAUAEAEAAAAQAABQEQAAEAAAABQAUAUQAAUAAAVQAAAAAAAQQAABAAAFQBAAQAAAAFBYAARQAFAAAFUAAAAAAAAAEEAAAQAABUQAEAAABQAUAUQAUAAAVQAAAAAAAAAAAQQABAAAFQBAAQAAFABQBRABQAAUUAB3vB3g9GupqMs6udNyGWMfFjDynG3xv39by4jE+6mIyzze7CYP39Mz7WWTt+Ykec590+Z0af4Xq5p8fl6nMSPOk+6fMaf4Tmnx+XqcxI85z7p8xp/hOafH5epzEjznPunzGn+E5p8fl6nMSPOc+6fMaf4Tmnx+XqcxI86T7n8xp/hOafH5er8ZuA8VplyfaUzyeO1931Tdv3Rv/EsY7OYj2Uq5LyiZ9vy9WNhoMhQAQQABAAFARAAQAAFABQEUABQABVAABuvo78Dr/Wq91mY/tU7G3yV2K9v8ZrXbX2rGbV0rtHW1rXVZa1rGptEViLzujreyizb9mP8AzGpnXMRdiuqIrnXP7cmz83CTUzemi1W0c84435LRq5rWn6zO5xrpsUduIcrVWJuzlbqmd7j1ev2/gvbT6rW7RwZqdM0vqbdXb19MOVNuzVGdMQ413cRRV7NdUxO1w/bG1vOeu96v/Ll7m39MOGk3vrn8n2ztbznrver/AMnubf0waTe+ufyfbO1vOeu96v8Aye5t/TBpN765/LacGNRny7O1OXU5sufJxs9eUzXm87uL1b5Z2Jpim9EUx3NnB11V4aZqnPW87jqj0NZ89CigIIAAgACgIgAIAACgoACKAoAAKKAAA3X0d+B1/rVe6zMf2qdjb5K7Fe3+MbtDw+t9cy9+WhR2KdkMi78SrbP7argTtfZ+HFn0eqz4tLlnUTnrkzW4lcsTER1z0b+h4cZZrqqiqmM2nydiLdFE0VzlOebr+Ge0tJqc+D6naMtNNhnHfPWOjJMzv3R2xH/XdhLVVFE+183n5Qv0Xbkex05Pl2Twe12rxajVYYrTHipPIcp0fW7x/jH89v67ud3EUW6opl12MHcvUzVT8tX3dTatom1L1tW9ZmtqWjizWY643O/XqeWYy6JRUb7gh92an8+fusrFfHjc3sB/lne8/jqj0NVgQooCACAIAAoCIACAAAoKAAigKAACigAAN19Hfgdf61XuszH9qnY2+SuxXt/jG7Q8PrfXMvfloUdinZDIu/Eq2z+3FSl543Epa/ErN78Ss24le2eyHLPLW4REzqdzwa2Dk1t+Vy8bHoMNv6uSOic0/gj/ALLz4jERajKNb2YPCTfnOezHGT0jDix0rTDipXHix1imOlI3RSI8THmZmc5fRU0xTERTqh1219iaPU4tVjjDhxanPMZY1NccRblIjdEzPj7P1d1q/VRVE59EPPfwtF2iqMspn5/d5hnw5Md8mDNSceXDeceSk/4zDZpmKoiYfNVUzTM01a4bvgh92an8+fuszFfHjc3MB/lnewEdUehqsCAUBABAAEAAVEABAAAUFAARQFAABRQAAG6+jzwOv9ar3WZj+1TsbfJXYr2/xlL6TUZ9XqdLpcc5M2XW5YrWOiIjjzvmZ8UPdFcUW4qq7oZc26rl6qmiOmZn9vRNg7G0+ixcnTdk1GSInU6jdunJPZ/5DIv3pu1Zzq+T6DDYamxTlGv5y7KlKViKY6VpWJmYrSsViN875dUzM63oiIjoh+kUBkOHOxuNX7W09P6mKsV1tax/fTxX/T/Xoe/B3sp93VuZPKWGzj3tPy1/93frY5+CH3Zqfz5+644r48bnZgP8s72Ar1R6GqwIBQEAEAAQABUQAEAABQUABFAUAAFFAAAbr6O/A6/1qvdZmP7VOxt8ldivb/HxYtl8KNPm12bZ+DHjjU6i9+Um2C9rV40zH93VHS7Ju2K6aYrnVtdNNjFW66ptxrn7Po3cO+2n7Zw6pxm7Ov8AGS7uHfbT9sdU4zOv8ZG7h320/bHVOMzr/GSbuHfbT9sdU4zOv8ZJanDmYtW3J2raJrato00xaOxc8Lxmkxj56J/jtOD+h1Wm0Gp0+rxxiy782TixeL9E16Op0X7lNd6Jp+z1YW1Vaw801x09LzaOqPQ2HzkKKAgAgCAAAKiAAgAAKACgIoACgACqAADtti7f1eirmxabFp8lc2SMlpzVtMxMRu8Uui9h6bsxNU6nqw+LrsRMUxHS7LnvtTybQ+xf4nToNvvl6OdLvdHG8577U8m0PsX+I0G33yc6Xe6ON5z32p5NofYv8RoNvvk50u90cbznvtTybQ+xf4jQbffJzpd7o43nPfank2h9i/xGg2++TnS73RxvOe+1PJtD7F/iNBt98nOl3ujje/GXhptO1b47afQxXJSaTMUvviJjd+JYwVETnnKTyndmJjKON7NQ9jOAAQQABAAFBERQBAAAUAFAFEAFAABRQAAAFAAABAAAAAQQABAAFARAAQAAFABQAEUBQAABVAAAAAAAAAAABBAAEAAAVAVBAEAABQAUABFAAUAAAVQAAAAAAAAAQAQABAAAFRAAQAAAAFABQBRAABQAABVAAAAAAABBAAAEAAAVBBFAEAAAABQAUABFAAUAAAAAUBQAQAQAAABAAAFARAAAQAAAAAFABQAEUAABQAAAAAAAAAAAQAAABUAQAEAAAAAABQAAUABFAAAUAAAAAAAAAEAAAAVAEABAAAAAAAAAUAAFAQBQAAAAAFABAAAAAAAFQQRQABAAAAQH/9k='];

  
  images: { id: number, base64String: string, url: string }[] = [];


  constructor(private http: HttpClient,private sanitizer:DomSanitizer,private clientLogoService:ClientLogoService) {}

  ngOnInit(): void {
    this.getAllClientLogos();
  }

  onDelete(id: number): void {
    this.http.delete(`http://localhost:3000/logo/${id}`).subscribe(
      (response) => {
        console.log('Image deleted successfully.',response);
        this.getAllClientLogos();
      });
  }


  getAllClientLogos() {
    this.clientLogoService.getAllClientLogos().subscribe(
      (logos: string[]) => {
        this.clientLogos = logos;
      },
      (error: any) => {
        console.log('Error retrieving client logos:', error);
      }
    );
  }

  getBase64Image(image: string): string {
    return `data:image/jpeg;base64,${image}`;
  }
}