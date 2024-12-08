import { HttpRequestParameters } from "../../interfaces";

export const ROWS_PER_PAGE: number[] = [5, 10, 20, 50];
export const INITIAL_PAGE = 0;
export const INITIAL_REQUEST_PARAMS: HttpRequestParameters = {
  size: ROWS_PER_PAGE[0],
  page: INITIAL_PAGE
};
