#!/usr/bin/env node

const r = require("./Ramadan.json");
const Table = require('cli-table3');
const chalk = require('chalk');
const meow = require('meow');

const { flags } = meow({
  flags: {
    all: {
      type: 'boolean',
      alias: 'a'
    }
  }
});

const today = new Date().toDateString().match(/\w+\s\d{1,2}/gi) + "";
const info = r.find(({ date }) => date === today);
const table = new Table({ head: ["", ...[...Object.keys(info).splice(2)].map(_ => _ == 'Maghrib' ? chalk.green(_) : chalk.cyan(_))] });

if (flags.all) {
  for (const key of r) {
    table.push(
      { [chalk.magentaBright(`#${key.id}`)]: Object.values(key).splice(2).map(_ => `${_} AM`) }
    );
  }
} else {
  table.push(
    { [chalk.magentaBright(`#${info.id - 1}`)]: Object.values(info).splice(2).map(_ => `${_} AM`) }
  );
}

console.log(table.toString());