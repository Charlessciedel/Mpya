import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
@Output() isComplete = new EventEmitter<boolean>();
   tup = 0;
   tdown = 0;

   thumbUp(){
     this.tup = this.tup + 1;//adds one on mouse click
   }

   thumbDown(){
     this.tdown = this.tdown + 1;//adds one per mouse click
   }

  constructor() { }

  ngOnInit() {
  }

}
