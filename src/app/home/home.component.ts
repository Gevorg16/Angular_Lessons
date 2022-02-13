import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

data: string[] =['Group 1', 'Group 2','Group 3']
response: any[] = []

index!:number
id:any

form = this.fb.group({
  firstName: ['', Validators.required],
  lastName: ['',Validators.required],
  gender: ['',Validators.required],
  age: ['',Validators.required],
  number: ['',Validators.required],
})

html:string = '<p>This is a text</p>'

@ViewChild('child') home_child: any;
@ViewChild('p_el') p_el: any

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



  constructor(public request: RequestService,
              public fb: FormBuilder   
    ) {console.log('constructor');
     }

  ngOnInit(): void {
    this.getDate();
    console.log('ngOnInit');
    
  }

  ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
      console.log(this.home_child.str);
      this.p_el.nativeElement.style.color = 'red'
      
  }

  getDate(){
    this.request.get(`${environment.url}/people`).subscribe((res:any) => {
      console.log(res); 
      this.response = res  
    })
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
  
  deleteItem(id:number){
    this.request.delete(`${environment.url}/people/${id}`).subscribe(()=>{
      this.getDate()
    })
  }

  editItem(value:any){
    this.id = value['id'];
    this.form.patchValue(value)
  }

  send(){
    // console.log(this.form.value);
    // this.request.edit(`${environment.url}/people/${this.id}`, this.form.value).subscribe(()=>{
    //   this.getDate()
    //   this.form.reset()
    // })
    this.request.create(`${environment.url}/people`,this.form.value).subscribe(()=>{
      this.getDate()
      this.form.reset()
    })
  }

  toParent(e: any) {
    console.log(e);
  }
}
