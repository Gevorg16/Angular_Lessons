import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

data: string[] =['Group 1', 'Group 2','Group 3']

index!:number

users: any[]=[
  {
    id: 1,
    firstName: 'Mike',
    lastName: 'Tyson',
    email: 'tyson@gmail.com'
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Smith',
    email: 'smith@gmail.com',
    phone: '+37453123123'
  },
  {
    id: 3,
    firstName: 'Kevin',
    lastName: 'Smith',
    email: 'kevin@gmail.com'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

  view(value:any,index:number,last:boolean){
    this.index = index;
    console.log(value);
    console.log(index);
    console.log(last);
    
  }
  delete(index:number){
    this.users.splice(index,1)
  }
}
