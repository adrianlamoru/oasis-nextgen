// https://hassantariqblog.wordpress.com/2017/03/16/angular2-creating-custom-search-filter-pipe-for-ngfor-directive/

import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }

    return items.filter(it => it[field] === value);
  }
}
