import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oasis-loader',
  templateUrl: './oasis-loader.component.html',
  styleUrls: ['./oasis-loader.component.scss']
})
export class OasisLoaderComponent implements OnInit {

  @Input() isLoading: boolean;

  constructor() { }

  ngOnInit() {
    // this.show = true;
    setTimeout(function() {  this.show = false; }, 3000);
  }

}
