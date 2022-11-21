import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {GameComponent} from "./pages/game/game.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import { BoardComponent } from './pages/board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
