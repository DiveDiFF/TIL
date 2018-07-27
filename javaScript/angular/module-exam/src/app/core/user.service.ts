import { Injectable } from '@angular/core';
// import { CoreModule } from './core.module';

import { User } from '../user';

@Injectable(
//   {
//   providedIn: CoreModule /* UserService를 CoreModule의 구성요소로 등록 or module에 등록*/
// }
)
export class UserService {
  getUser(): User {
    // 임의의 사용자를 반환한다. 실제 환경에서는 서버의 데이터를 취득하여 반환할 것이다.
    return { id: 1, name: 'Lee', admin: true };
  }
}
