export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? `${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `${date.getDate()}` : date.getDate();
  return `${year}.${month}.${day}`;
};
