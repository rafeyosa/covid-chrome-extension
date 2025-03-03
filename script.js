async function fetchData() {
const countryCode = "USA";
  const res = await fetch(
    `https://covid-api.com/api/reports/total?date=2020-03-14&iso=${countryCode}`
  );
  const record = await res.json();
  document.getElementById("date").innerHTML = record.data.date;
  document.getElementById("areaName").innerHTML = countryCode;
  document.getElementById("latestBy").innerHTML = record.data.confirmed;
  document.getElementById("deathNew").innerHTML = record.data.deaths;
}
fetchData();
