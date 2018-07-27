// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* HomeModule 임포트 */
import { HomeModule } from './home/home.module';
/* CoreModule 임포트 */
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule, /* HomeModule 임포트 */
    CoreModule   /* CoreModule 임포트 */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
