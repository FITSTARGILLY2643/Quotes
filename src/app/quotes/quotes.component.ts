import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  title = 'Awesome quotes';
  quotes:Quote[] = [
    new Quote (1,'Charles','Human spirit','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein', new Date(2019,7,12),0,0),
    
  ];

  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  

  constructor() { }

  ngOnInit(): void {
  }

}
