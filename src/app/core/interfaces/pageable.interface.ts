export interface Pageable<T> {
  content: T[];
  totalElements: number;
  numberOfElements: number;
}
