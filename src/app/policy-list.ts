import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Policy } from './policy';

export class PolicyData implements InMemoryDbService {

  createDb() {
    const policies: Policy[] = [
      {
        policyNum: 8454567896331
      },
      {
        policyNum: 9123456796321
      },
      {
        policyNum: 9534567892031
      }
    ];
    return { policies };
  }
}
