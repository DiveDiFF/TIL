import { NgModule } from '@angular/core';

/* UserService 임포트 */
import { UserService } from './user.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [UserService], /* UserService 등록 */
  exports: []
})
export class CoreModule { }
