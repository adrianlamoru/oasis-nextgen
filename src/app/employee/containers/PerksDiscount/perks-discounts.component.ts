import { Component, OnInit } from '@angular/core';
import { IPerkDiscountCard } from '../../models';
import { IDataDrivenCards } from '../../../shared/models';
import { PerksDiscountService } from '../../services';

@Component({
  selector: 'app-perks-and-discounts',
  templateUrl: './perks-discounts.component.html',
  styleUrls: ['./perks-discounts.component.scss']
})
export class PerksDiscountComponent implements OnInit {
  
  perksDiscountsCards: IPerkDiscountCard[];

  filteredPerksDiscountsCards: IPerkDiscountCard[];

  tags: IDataDrivenCards[] = [
    {
      ID: "financial-services",
      Text: "Financial Services",
      Show: true
    }, {
      ID: "education-discounts",
      Text: "Education Discounts",
      Show: true
    }, {
      ID: "health-wellness",
      Text: "Health and Wellness",
      Show: true
    }, {
      ID: "discount-programs",
      Text: "Pet Discount Programs",
      Show: true
    }, {
      ID: "travel-entertainment",
      Text: "Travel and Entertainment",
      Show: true
    }, {
      ID: "retail",
      Text: "Retailers",
      Show: true
    }
  ];

  dropdownFilterBy: IDataDrivenCards[] = [
    {
      ID: "all",
      Text: "All",
      Show: true
    }
  ];

  constructor(private perkDiscountServices: PerksDiscountService) {
    this.perksDiscountsCards = [];
    this.filteredPerksDiscountsCards = [];
  }

  ngOnInit() {
    this.dropdownFilterBy = this.dropdownFilterBy.concat(this.tags);
    this.perkDiscountServices.getPerksDiscounts()
      .subscribe((response: IPerkDiscountCard[]) => {
        this.perksDiscountsCards = response;
        this.filteredPerksDiscountsCards = this.perksDiscountsCards;
      },
        error => {
          console.log(error);
        });
  }

  filterListBy(id: string): void {
    if (id == 'all') {
      this.filteredPerksDiscountsCards = this.perksDiscountsCards;
    } else {
      this.filteredPerksDiscountsCards = this.perksDiscountsCards.filter(c => c.tag == id);
    }
  }

}
