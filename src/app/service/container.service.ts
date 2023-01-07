import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Container } from '../model';

@Injectable({ providedIn: 'root' })
export class ContainerService extends EntityCollectionServiceBase<Container> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Container', serviceElementsFactory);
  }
}