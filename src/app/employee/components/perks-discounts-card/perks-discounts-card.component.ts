import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { IPerkDiscountCard } from '../../models';
import { IDataDrivenCards } from '../../../shared/models';

@Component({
  selector: 'app-perks-discounts-card',
  templateUrl: './perks-discounts-card.component.html',
  styleUrls: ['./perks-discounts-card.component.scss']
})
export class PerksDiscountsCardComponent implements OnInit, OnChanges, DoCheck {

  @ViewChild('cardText') cardText: ElementRef;

  @Input()
  card: IPerkDiscountCard;

  @Input()
  tags: IDataDrivenCards[];

  constructor() { }

  ngOnInit() {
    
  }

  ngDoCheck(): void {
    this.setElipses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setElipses();
  }

  getTagText(tag:string): string {
    var result: IDataDrivenCards | undefined = this.tags.find(t => t.ID == tag);
    if(result) {
      return result.Text
    }
    return tag;
    
  }

  private setElipses(): void{
    var wordArray = this.cardText.nativeElement.innerHTML.split(' ');
    while (this.cardText.nativeElement.scrollHeight > this.cardText.nativeElement.offsetHeight) {
      wordArray.pop();
      this.cardText.nativeElement.innerHTML = wordArray.join(' ') + '...';
    }
  }

}
