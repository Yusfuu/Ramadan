#!/usr/bin/env node

const r = require("./Ramadan.json");
const Table = require("cli-table3");
const meow = require("meow");
const _date = new Date();
const { flags } = meow({ flags: { all: { type: "boolean", alias: "a" }, fotor: { type: "boolean", alias: "f" } } });

const c = {
  magenta: "\x1B[95m$\x1B[39m", green: "\x1B[32m$\x1B[39m", cyan: "\x1B[36m$\x1B[39m"
}
function getMaghrib() {
  const t = new Date(`2021-01-01T${info.Maghrib}`);
  const _t = new Date(`2021-01-01T${_date.toLocaleTimeString().slice(0, 5)}`);
  const r = (t - _t) / 60000;
  return r <= 0 ? 'Fotor Mubarak' : `${(~~(r / 60))} hour(s) and ${(r % 60)} minute(s).`;
}

const today = _date.toDateString().match(/\w+\s\d{1,2}/gi) + "";
const info = r.find(({ date }) => date === today);
const table = new Table({ head: ["", ...[...Object.keys(info).splice(2)].map(_ => _ == "Maghrib" ? c.green.replace("$", _) : c.cyan.replace("$", _))] });


if (flags.fotor) {
  console.log(c.cyan.replace('$', getMaghrib()));
  return;
}

if (flags.all) {
  for (const key of r) {
    table.push(
      { [c.magenta.replace("$", `#${key.id}`)]: Object.values(key).splice(2).map(_ => `${_} AM`) }
    );
  }
} else {
  table.push(
    { [c.magenta.replace("$", `#${info.id}`)]: Object.values(info).splice(2).map(_ => `${_} AM`) }
  );
}

console.log(table.toString());
