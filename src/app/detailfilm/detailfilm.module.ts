import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailfilmPageRoutingModule } from './detailfilm-routing.module';

import { DetailfilmPage } from './detailfilm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailfilmPageRoutingModule
  ],
  declarations: [DetailfilmPage]
})
export class DetailfilmPageModule {}
