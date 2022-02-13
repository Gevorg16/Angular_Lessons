import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date = new Date()

  text = "This is a text"

  textForTrim = "        This is a random text       "

  constructor() { }

  ngOnInit(): void {
    console.log('asd')
  }

}
