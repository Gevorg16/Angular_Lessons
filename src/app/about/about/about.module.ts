import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from '../about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { AboutChildComponent } from '../about-child/about-child.component';
import { ChildComponent } from '../child/child.component';


@NgModule({
  declarations: [AboutComponent,AboutChildComponent,ChildComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AboutModule { }
