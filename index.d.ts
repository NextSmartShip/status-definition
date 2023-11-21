import { StatusDefinition } from './types';

declare const statusDefinition: StatusDefinition;

export = statusDefinition;

export type ValueOf<T> = T[keyof T];
