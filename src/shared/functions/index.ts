import { format, parseISO } from "date-fns";

export const sumArrayValuesLength = (obj: {
  [key: string]: string | string[];
}) => {
  const parsedValues: { [key: string]: string | string[] } = {};
  let totalLength = 0;

  for (const key in obj) {
    const value = obj[key];

    let parsedValue;
    try {
      parsedValue = JSON.parse(value as any);
    } catch (error) {
      // If JSON parsing fails, keep the original value
      parsedValue = value;
    }

    if (Array.isArray(parsedValue) && parsedValue.length > 0) {
      parsedValues[key] = parsedValue;
      totalLength += parsedValue.length;
    } else {
      parsedValues[key] = parsedValue;
      if (
        parsedValue !== "" &&
        parsedValue !== null &&
        parsedValue !== undefined
      ) {
        totalLength += 1;
      }
    }
  }

  return { parsedValues, totalLength };
};

export const getFilterCount = (queryValues: Record<any, string>) =>
  sumArrayValuesLength({
    status: queryValues?.status,
    type: queryValues?.type,
    startDate: queryValues?.startDate,
    endDate: queryValues?.endDate,
  });

export function formatDate(inputDate: string) {
  const parsedDate = parseISO(inputDate);
  return format(parsedDate, "MMM dd, yyyy");
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amount);
}
