import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TrimPipe } from 'src/app/pipes/trim.pipe';
import { MyDatePipe } from 'src/app/pipes/my-date.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TrimPipe,
    MyDatePipe,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
