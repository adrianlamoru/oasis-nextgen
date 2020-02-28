import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatDate' })
export class FormatDatePipe implements PipeTransform {
    transform(dateObj: any): any {
        const monthNames = [
            'January', 'February', 'March',
            'April', 'May', 'June', 'July',
            'August', 'September', 'October',
            'November', 'December'
        ];

        if (typeof dateObj === 'string') {
            return dateObj;
        } else if (dateObj instanceof Date) {
            return monthNames[dateObj.getMonth()] + ' ' + dateObj.getDay() + ', ' + dateObj.getFullYear();
        } else {
            return monthNames[dateObj.month - 1] + ' ' + dateObj.day + ', ' + dateObj.year;
        }
    }
}
