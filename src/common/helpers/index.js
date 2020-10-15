import { format } from 'date-fns';

export const monthYearFormat = date => {
  if (!date) return "";
  return format(new Date(date), "MMM Y");
};
