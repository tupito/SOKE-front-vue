// muutetaan päivämäärätieto suomalaiseen muotoon: 2020-05-31T23:59:00 -> 31.5.2020
function toFinDate(inputDate) {
  let dateObj = new Date(Date.parse(inputDate));
  return (
    dateObj.getDate() +
    "." +
    (dateObj.getMonth() + 1) +
    "." +
    dateObj.getFullYear()
  );
}

export default {
  toFinDate
};
