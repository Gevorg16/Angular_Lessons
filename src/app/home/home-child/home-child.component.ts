import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {

  @Input() data: any;
  @Input() test: any;

  @Output() event: EventEmitter<any> = new EventEmitter<any>();

  str: string = 'this is a text'

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

  clickMe () {
    this.event.emit('text')
  }
}
