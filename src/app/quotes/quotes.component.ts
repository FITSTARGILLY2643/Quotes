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
    new Quote (1,'Gilbert Pretorio','Lessons of failure','It’s fine to celebrate success but it is more important to heed the lessons of failure.','Bill Gates', new Date(2021,3,14),0,0),
    new Quote (2,'Ibrahim kiprotich','Future and Attitude','The greatest discovery of all time is that a person can change his future by merely changing his attitude.','Oprah Winfrey',new Date(2020,7,10),0,0),
    new Quote (3,'Kelvin Chepkuta','Choices in Life','There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.','Denis Waitley',new Date(2020,2,1),0,0)
    
  ];

  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  

  addedQuote(quote){
    let arraysize = this.quotes.length;                  
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }

  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
