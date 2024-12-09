import { Sort } from "@angular/material/sort";
import { PageChange } from "../modules/table/interfaces";
import { INITIAL_PAGE } from "../constants/table/table.constants";
import { HttpRequestParameters } from "../interfaces";

function getSortParams(sort: Sort): string {
  return `${sort.active},${sort.direction}`;
}

function getPageParams(pageChange: PageChange): number {
  const { limit, start } = pageChange;

  if (!!limit && !!start) {
    return start / limit;
  }
  return INITIAL_PAGE;
}

function hasSortParams(sort?: Sort): boolean {
  return !!sort?.active && !!sort?.direction;
}

function hasPaginationParams(pageChange?: PageChange): boolean {
  return pageChange?.limit !== undefined && pageChange?.start !== undefined;
}

export function buildHttpRequestParameters(
  httpRequestParameters: HttpRequestParameters,
  sort?: Sort,
  pageChange?: PageChange
): HttpRequestParameters {
  const params: HttpRequestParameters = httpRequestParameters;

  if (hasSortParams(sort)) {
    params.sortBy = getSortParams(sort as Sort);
  }

  if (hasPaginationParams(pageChange)) {
    params.page = getPageParams(pageChange as PageChange);
  }

  if (!!pageChange?.limit) {
    params.size = pageChange.limit;
  }

  return params;
}
