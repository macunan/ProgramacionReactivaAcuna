import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AnimesPageComponent } from './animes-page/animes-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AnimesPageComponent
  ],
  imports: [ // IMPORTANDO
    CommonModule,
    SharedModule, // SHARED MODULE -> CONTIENE LOS COMPONENTES EXPORTADOS CAR1, CAR2, CAR2
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    AnimesPageComponent,
  ]
})
export class PagesModule { }
