export const withCapitalLetter = (str: string) => str[0].toUpperCase() + str.slice(1);

export const getFullName = (firstName: string, lastName: string) => firstName + ' ' + lastName;

export const getFormattedDate = (timestamp: number, isFull?: boolean) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const newDate = new Date(timestamp * 1000);

  const year = newDate.getFullYear();
  const date = newDate.getDate();
  const month = newDate.getMonth();

  const minutes = newDate.getMinutes();
  const hours = newDate.getHours();

  const formattedDate = date + ' ' + monthNames[month] + ' ' + year;
  const fullDate = formattedDate + ' at ' + hours + ':' + minutes;

  return isFull ? fullDate : formattedDate;
};
