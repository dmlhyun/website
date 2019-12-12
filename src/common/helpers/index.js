import moment from "moment";

export const monthYearFormat = date => {
  if (!date) return "";
  return moment(date).format("MMM YYYY");
};
