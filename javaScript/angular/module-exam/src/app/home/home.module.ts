import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* SharedModule 임포트 */
import { SharedModule } from '../shared/shared.module';

/* HomeComponent 임포트 */
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule /* SharedModule 임포트 */
  ],
  declarations: [HomeComponent], /* HomeComponent 선언 */
  providers: [],
  exports: [HomeComponent] /* HomeComponent 공개 */
})
export class HomeModule { }
