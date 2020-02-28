import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrichment-area',
  templateUrl: './enrichment-area.component.html',
  styleUrls: ['./enrichment-area.component.scss']
})
export class EnrichmentAreaComponent implements OnInit {
  isEnrichmentAreaCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
