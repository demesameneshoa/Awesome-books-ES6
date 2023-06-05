// display time
import { DateTime } from './luxon.js';

const doDate = () => {
  const currentDate = document.querySelector('.date');
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ];
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const date = DateTime.now();
  const month = months[date.month];
  const { day } = date;
  const suffix = day % 10 <= 3 ? suffixes[day % 10] : suffixes[0];
  const hour = date.hour > 12 ? date.hour - 12 : date.hour;
  const ampm = date.hour >= 12 ? 'PM' : 'AM';
  const minutes = date.minute.toString().padStart(2, '0');
  const seconds = date.second.toString().padStart(2, '0');
  const dateString = `${month} ${day}${suffix} ${date.year}, ${hour}:${minutes}:${seconds} ${ampm}`;
  currentDate.innerHTML = `${dateString}`;
};

export default doDate;