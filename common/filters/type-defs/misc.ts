export type Languages = 'en' | 'fa';
export type IEntity =
  | {
      id: number;
    }
  | { _id: string };
export type IPaginate<T> = {
  limit?: number;
  sort?: {
    [K in keyof T]?: 'DESC' | 'ASC';
  };
};
