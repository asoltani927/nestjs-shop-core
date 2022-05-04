export type QueryOperation =
  | 'not'
  | 'lte'
  | 'gte'
  | 'gt'
  | 'lt'
  | 'eq'
  | 'like'
  | 'between'
  | 'in'
  | 'any'
  | 'isnull';

export type QueryFilters = Record<string, any>;

export type Filterable<T> = {
  name: keyof T;
  ops: QueryOperation[] | 'all';
  relation?: string;
};
