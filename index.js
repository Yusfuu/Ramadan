#!/usr/bin/env node

import Table from 'cli-table3';
import meow from 'meow';
import chalkAnimation from 'chalk-animation';
import { data } from './ramadan.js';
import gradient from 'gradient-string';
import figlet from 'figlet';

const { flags } = meow({
  flags: {
    all: { type: 'boolean', alias: 'a' },
    fotor: { type: 'boolean', alias: 'f' },
  },
});

const c = {
  magenta: '\x1B[95m$\x1B[39m',
  green: '\x1B[32m$\x1B[39m',
  cyan: '\x1B[36m$\x1B[39m',
};

const event = new Date();
const sleep = (ms = 5000) => new Promise((r) => setTimeout(r, ms));

const today = event.toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
});

const current = event.toLocaleString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const remaining = (adan) => {
  const t = new Date(`2022-01-01T${adan.Maghrib}`);
  const _t = new Date(`2022-01-01T${current}`);
  const r = (t - _t) / 60000;
  return r <= 0
    ? 'Fotor Mubarak 🚀'
    : `${~~(r / 60)} hour(s) and ${r % 60} minute(s).`;
};

// get current adan
const adans = data.find(({ date }) => date === today);

// get remaining time to maghrib
const maghrib = remaining(adans);

// create table
const table = new Table({
  head: ['', 'Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'],
  style: {
    head: ['cyan'],
  },
});

// get all adans times
const allAdans = () => {
  for (const key of r) {
    const fields = Object.values(key).splice(2);
    const row = {
      [adans.id]: fields,
    };
    table.push(row);
  }
  console.log(table.toString());
};

// get current adan times
const currentAdan = () => {
  const fields = Object.values(adans).splice(2);
  const row = {
    [adans.id]: fields,
  };
  table.push(row);
  console.log(table.toString());
};

async function main() {
  console.clear();
  figlet(`Ramadany`, async (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');
    const clear = chalkAnimation.rainbow(maghrib);
    await sleep();
    clear.stop();
  });
}

if (flags.fotor) {
  main();
} else {
  flags.all ? allAdans() : currentAdan();
}
