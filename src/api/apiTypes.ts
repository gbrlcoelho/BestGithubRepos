export interface PageAPI<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}

export interface PageParams {
  page?: number;
  per_page?: number;
}
