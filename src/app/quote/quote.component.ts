import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote [] = [
    new Quote(1, 'George Charles', 'Hakuna mkate mgumu mbele ya supu.',new Date(2019,3,14)),
    new Quote(2,'Charles Osoro','It is never that serious.',new Date(2019,3,14)),
    new Quote(3,'Allan Moore','People should not fear their government, governments should fear their people.',new Date(2019,3,14)),
    new Quote(4,'Charles Schiedel','Wakanda forever.',new Date(2019,3,14)),
    new Quote(5,'Jesus Christ','Love your neighbour as you love yourself.',new Date(2019,3,14)),
  ];

  toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    deleteGoal(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

    addNewQuote(quote){
   let quoteLength = this.quotes.length;
   quote.id = quoteLength+1;
   quote.completeDate = new Date(quote.completeDate)
   this.quotes.push(quote)
 }
  constructor() { }

  ngOnInit() {
  }

}
