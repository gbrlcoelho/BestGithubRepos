export interface PageAPI<T> {
  items: T[];
}

export interface PageParams {
  page?: number;
  per_page?: number;
}
