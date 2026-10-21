function dateString(date) {
  const [year, month, day] = date.split("-");
  const dateNew = new Date(year, month - 1, day);

  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateNew);

  return formattedDate;
}

export { dateString };
