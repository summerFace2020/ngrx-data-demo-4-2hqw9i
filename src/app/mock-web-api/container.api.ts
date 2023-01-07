import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, RequestInfoUtils } from 'angular-in-memory-web-api';

// tslint:disable:no-unused-variable
import { Observable, of }  from 'rxjs';
import { delay } from 'rxjs/operators';
// tslint:enable:no-unused-variable

@Injectable()
export class ContainerInMemDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo) {

    const containers = [
      { id: 1, name: 'ubuntu' },
      { id: 2, name: 'alpine' },
      { id: 3, name: 'openmpi' },
      { id: 4, name: 'cuda' }
    ];

    const nobodies: any[] = [ ];


    // default returnType
    let returnType  = 'object';
    // let returnType  = 'observable';
    // let returnType  = 'promise';

    // demonstrate POST commands/resetDb
    // this example clears the collections if the request body tells it to do so
    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        containers.length = 0;
        nobodies.length = 0;
      }

      // 'returnType` can be 'object' | 'observable' | 'promise'
      returnType = body.returnType || 'object';
    }
    const db = { containers };

    switch (returnType) {
      case ('observable'):
        return of(db).pipe(delay(10));
      case ('promise'):
        return new Promise(resolve => {
          setTimeout(() => resolve(db), 10);
        });
      default:
        return db;
    }
  }

  parseRequestUrl(url: string, utils: RequestInfoUtils) {
    const newUrl = url.replace('containers', 'container').replace('container', 'containers');
    const parsed = utils.parseRequestUrl(newUrl);
    return parsed;
  }

}