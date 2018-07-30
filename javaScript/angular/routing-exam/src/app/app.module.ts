import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 라우팅 모듈 임포트
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// 컴포넌트 임포트
import {
  HomeComponent,
  ServiceComponent,
  AboutComponent,
  NotFoundComponent
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule /* 라우팅 모듈 등록 */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
