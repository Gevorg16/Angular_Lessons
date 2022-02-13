import { style, trigger, state, transition, animate } from '@angular/animations';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/interfaces/user';


// interface User {
//   id: number,
//   name: string,
//   last_name: string,
//   isAdmin: Boolean,
//   age: number,
//   children: Object
// }

@Component({
  selector: 'app-about-child',
  templateUrl: './about-child.component.html',
  styleUrls: ['./about-child.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '200px',
        height: '100px',
        backgroundColor: 'blue',
        opacity: 0.2
      })),
      state('close', style({
        width: '200px',
        height: '200px',
        backgroundColor: 'green',
        opacity: 1
      })),
      transition('open => close', animate('1.2s')),
      transition('close => open', animate('1.2s'))
    ])
  ]
})
export class AboutChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit,AfterViewChecked {

  @Input() value = 'child value'
  current = true

  user: User[] = [
    {
      id: 1,
      name: 'Mike',
      last_name: 'Tyson',
      isAdmin: true,
      age: 18,
      children: {}
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit'); 
  }

  ngAfterViewInit(): void {
      console.log('ABOUT-CHILD ngAfterViewInit');
      
  }

  ngAfterViewChecked(): void {
      console.log('About Child ngAfterViewChecked');
      
  }

  ngOnDestroy(): void {
      console.log("ngOnDestroy");
      
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }

   ngDoCheck(): void {
      console.log('ngDoCheck'); 
   }

}
