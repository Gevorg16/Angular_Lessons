import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form = new FormGroup({
first_name: new FormControl ('', [Validators.required, /*Validators.pattern(/^[a-z]{1,}$/)*/]),
last_name: new FormControl ('', [Validators.minLength(6), Validators.maxLength(20)]),
email: new FormControl ('', [Validators.required, Validators.email]),
age: new FormControl ('', [Validators.min(18), Validators.max(99)]),
phone: new FormControl ('', [Validators.required, Validators.pattern(/^[0-9]{5,}$/)])
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
    // console.log(this.form.get('email')?.valid)
    // console.log(this.form.get('email')?.dirty)
    console.log(this.form.get('email')?.hasError('required'))
    // console.log(this.form.get('email')?.touched)
  }

  resetForm(){
this.form.reset({age: 89})
  }

}
