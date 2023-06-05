// display time

const doDate = () => {
  const currentDate = document.querySelector('.date');
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ];
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const suffix = day % 10 <= 3 ? suffixes[day % 10] : suffixes[0];
  const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const dateString = `${month} ${day}${suffix} ${date.getFullYear()}, ${hour}:${minutes}:${seconds} ${ampm}`;
  currentDate.innerHTML = `${dateString}`;
};

export default doDate;