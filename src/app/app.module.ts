import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './pages/game/game.component';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
