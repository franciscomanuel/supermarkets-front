import { Pageable } from "../interfaces";

export function mapToPageable<T>(pageable: Pageable<T>): Pageable<T> {
  const { content, numberOfElements, totalElements, size } = pageable;

  return {
    content,
    numberOfElements,
    totalElements,
    size
  };
}
