// 1507. Reformat Date
function reformatDate(date) {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayDate = date
    .split(" ")[0]
    .split("")
    .filter((ele) => Number.isInteger(Number(ele)))
    .join("");
  const currentMonth = month.indexOf(date.split(" ")[1]) + 1;
  return `${date.split(" ")[2]}-${
    currentMonth > 9 ? currentMonth : `0${currentMonth}`
  }-${dayDate > 9 ? dayDate : `0${dayDate}`}`;
}

console.log(reformatDate("6th Jun 1933"));
