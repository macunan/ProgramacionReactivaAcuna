import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StudentsPageComponent } from './student-page/student-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StudentsPageComponent
  ],
  imports: [ // IMPORTANDO
    CommonModule,
    SharedModule, // SHARED MODULE -> CONTIENE LOS COMPONENTES EXPORTADOS CAR1, CAR2, CAR2
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    StudentsPageComponent,
  ]
})
export class PagesModule { }
