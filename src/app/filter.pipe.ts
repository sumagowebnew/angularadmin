import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchQuery: string): any[] {
    if (!items || !searchQuery) {
      return items;
    }

    // Convert the search query to lowercase for case-insensitive filtering
    searchQuery = searchQuery.toLowerCase();

    return items.filter(item => {
      return item.title.toLowerCase().includes(searchQuery);
    });
  }

}
