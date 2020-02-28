// https://hassantariqblog.wordpress.com/2017/03/16/angular2-creating-custom-search-filter-pipe-for-ngfor-directive/

import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'containsfilter'
})

@Injectable()
export class ContainsFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }

    if (value === null || value === '' || value === undefined) {
      return items;
    } else {
      return items.filter(it => it[field].toLowerCase().includes(value.toLowerCase()));
    }
  }
}
