import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  show = true
  parrentValue: any = 'Parrent component value'
  constructor() { }

  ngOnInit(): void {
  }

}
