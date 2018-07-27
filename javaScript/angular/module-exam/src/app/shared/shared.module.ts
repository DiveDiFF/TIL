import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* HeaderComponent 임포트 */
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent], /* HeaderComponent 선언 */
  providers: [],
  exports: [HeaderComponent] /* HeaderComponent 공개 */
})
export class SharedModule { }
