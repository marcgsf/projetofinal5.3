import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Er404PageRoutingModule } from './er404-routing.module';

import { Er404Page } from './er404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Er404PageRoutingModule
  ],
  declarations: [Er404Page]
})
export class Er404PageModule {}
