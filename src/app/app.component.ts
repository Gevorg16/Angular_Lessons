import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  con:number = 25;

  log(test: string | number)//:any//:number//:void
  {
    // let hello = 'Hello world!';
    // console.log(hello)
// console.log(test)
// return 25;
console.log(this.con)
console.log(this);

  }
}
