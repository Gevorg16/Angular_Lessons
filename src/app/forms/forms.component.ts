import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form = new FormGroup({
first_name: new FormControl ('', Validators.required),
last_name: new FormControl (''),
email: new FormControl ('', Validators.required),
age: new FormControl (''),
phone: new FormControl ('')
  })

  constructor() { }

  ngOnInit(): void {
    // this.form.setValue({
    //   first_name: 'Name',
    //   last_name: 'Last Name',
    //   email: 'test@mail.ru',
    //   age:18,
    //   phone: '+37477777770'
    // })
    this.form.patchValue({
      email: 'test@mail.ru'
    })
  }

  send(){
    console.log(this.form)//.valid
    // this.resetForm()
  }

  resetForm(){
this.form.reset({age: 89})
  }

}
