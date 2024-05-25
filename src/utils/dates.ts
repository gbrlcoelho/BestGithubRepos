import {format, parseISO} from 'date-fns';

const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'dd/MM/yyyy');
};

export const dateUtils = {
  formatDate,
};
