// const today = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
// const now = `${date.getHours()}:${date.getMinutes()}`;

// const Adan = [
//   "Fajr",
//   "Sunrise",
//   "Dhuhr",
//   "Asr",
//   "Maghrib",
//   "Isha"
// ];

// let ramadan = [];
// [...document.querySelectorAll('.ptrow')].forEach((row, index) => {
//   const date = row.firstChild.innerText;
//   const node = { id: index + 1, date };
//   [...row.children].splice(1).forEach((element, i) => {
//     node[Adan[i]] = element.innerText;
//   });
//   ramadan.push(node);
// });

// exportRamadan(ramadan);

// function exportRamadan(json) {
//   const j = JSON.stringify(json);
//   const link = document.createElement('a');
//   link.href = `data:application/json;charset=utf-8,${encodeURIComponent(j)}`;
//   link.download = 'Ramadan';
//   link.click();
//   link.remove();
// }