import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {

  current = true
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('CHILD ngAfterViewInit');      
  }

}
