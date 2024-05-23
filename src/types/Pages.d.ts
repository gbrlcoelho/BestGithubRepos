export interface MetaDataPage {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  hasNextPage: boolean;
}

export interface Page<T> {
  meta: MetaDataPage;
  data: T[];
}
