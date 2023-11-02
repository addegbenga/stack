import { useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

// Define TypeScript interfaces
interface QueryValues {
  [key: string]: string;
}
interface UseSearchQueryResult {
  pathname: string;
  createQueryString: (newValues: QueryValues) => string;
  queryValues: QueryValues;
}

export function useGetAllSearchQuery(
  initialValues: QueryValues
): UseSearchQueryResult {
  const searchQuery: any = useSearchParams();
  const pathname = usePathname();

  // Function to extract query parameters from URL and filter out empty values
  const getQueryValues = useCallback(() => {
    const params = new URLSearchParams(searchQuery);
    const queryValues: QueryValues = {};

    // @ts-ignore
    for (const [key, value] of params.entries()) {
      if (value) {
        queryValues[key] = value;
      }
    }

    return queryValues;
  }, [searchQuery]);

  // Initialize query values with initialValues
  const queryValues = getQueryValues();

  // Function to create a query string based on the current queryValues
  const createQueryString = useCallback(
    (newValues: QueryValues) => {
      const mergedValues = { ...queryValues, ...newValues };
      const params = new URLSearchParams();

      for (const [key, value] of Object.entries(mergedValues)) {
        params.set(key, value);
      }

      return params.toString();
    },
    [queryValues]
  );

  return {
    pathname,
    createQueryString,
    queryValues,
  };
}

export function useSearchQuery() {
  const searchQuery: any = useSearchParams()!;
  const pathname = usePathname();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  // const createQueryString = (name, value) => {
  //   const params = new URLSearchParams(searchQuery);
  //   params.set(name, value);
  //   return params.toString();
  // };
  const createQueryStringFn = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchQuery);
      params.set(name, value);

      return params.toString();
    },
    [searchQuery]
  );
  const createQueryStringfromObj = useCallback(
    (filterObject: { [key: string]: string | string[] }) => {
      const params = new URLSearchParams(searchQuery);

      for (const key in filterObject) {
        const value = filterObject[key];
        if (
          value !== "" &&
          value !== null &&
          value !== undefined &&
          (Array.isArray(value) ? value.length > 0 : true)
        ) {
          params.set(key, Array.isArray(value) ? JSON.stringify(value) : value);
        } else {
          params.delete(key);
        }
      }
      return params.toString();
    },
    [searchQuery]
  );
  const removeQueryParamsByKeys = useCallback(
    (keysToRemove: string[]) => {
      const params = new URLSearchParams(searchQuery);
      keysToRemove.forEach((key) => {
        params.delete(key);
      });
      return params.toString();
    },
    [searchQuery]
  );

  return {
    pathname,
    createQueryStringFn,
    createQueryStringfromObj,
    removeQueryParamsByKeys,
  };
}
