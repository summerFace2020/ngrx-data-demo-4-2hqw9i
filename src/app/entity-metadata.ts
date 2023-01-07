import {EntityMetadataMap, PropsFilterFnFactory} from '@ngrx/data';

import {Container} from './model';

export function containerNameFilterFn(containers: Container[], pattern: string) {
  return PropsFilterFnFactory(['name'])(containers, pattern);
}

export const entityMetadata: EntityMetadataMap = {
  Container: {
    filterFn: containerNameFilterFn,
    sortComparer: (a: Container, b: Container) => a.id - b.id
  }
};

export const entityConfig = {
  entityMetadata
}