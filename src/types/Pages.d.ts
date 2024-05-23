export interface MetaDataPage {
  perPage: number;
  currentPage: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Page<T> {
  meta: MetaDataPage;
  data: T[];
}
