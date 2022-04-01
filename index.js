#!/usr/bin/env node
import Table from 'cli-table3';
import meow from 'meow';
import chalkAnimation from 'chalk-animation';
import gradient from 'gradient-string';
import figlet from 'figlet';

const data = [
  {
    id: 1,
    date: 'Apr 1',
    Fajr: '04:57',
    Sunrise: '06:25',
    Dhuhr: '12:41',
    Asr: '16:13',
    Maghrib: '18:57',
    Isha: '20:15',
  },
  {
    id: 2,
    date: 'Apr 2',
    Fajr: '04:56',
    Sunrise: '06:24',
    Dhuhr: '12:41',
    Asr: '16:14',
    Maghrib: '18:57',
    Isha: '20:16',
  },
  {
    id: 3,
    date: 'Apr 3',
    Fajr: '04:54',
    Sunrise: '06:23',
    Dhuhr: '12:40',
    Asr: '16:14',
    Maghrib: '18:58',
    Isha: '20:17',
  },
  {
    id: 4,
    date: 'Apr 4',
    Fajr: '04:53',
    Sunrise: '06:21',
    Dhuhr: '12:40',
    Asr: '16:14',
    Maghrib: '18:59',
    Isha: '20:17',
  },
  {
    id: 5,
    date: 'Apr 5',
    Fajr: '04:52',
    Sunrise: '06:20',
    Dhuhr: '12:40',
    Asr: '16:14',
    Maghrib: '18:59',
    Isha: '20:18',
  },
  {
    id: 6,
    date: 'Apr 6',
    Fajr: '04:50',
    Sunrise: '06:19',
    Dhuhr: '12:39',
    Asr: '16:14',
    Maghrib: '19:00',
    Isha: '20:19',
  },
  {
    id: 7,
    date: 'Apr 7',
    Fajr: '04:49',
    Sunrise: '06:18',
    Dhuhr: '12:39',
    Asr: '16:14',
    Maghrib: '19:01',
    Isha: '20:20',
  },
  {
    id: 8,
    date: 'Apr 8',
    Fajr: '04:47',
    Sunrise: '06:16',
    Dhuhr: '12:39',
    Asr: '16:14',
    Maghrib: '19:02',
    Isha: '20:21',
  },
  {
    id: 9,
    date: 'Apr 9',
    Fajr: '04:46',
    Sunrise: '06:15',
    Dhuhr: '12:39',
    Asr: '16:14',
    Maghrib: '19:02',
    Isha: '20:22',
  },
  {
    id: 10,
    date: 'Apr 10',
    Fajr: '04:44',
    Sunrise: '06:14',
    Dhuhr: '12:38',
    Asr: '16:14',
    Maghrib: '19:03',
    Isha: '20:23',
  },
  {
    id: 11,
    date: 'Apr 11',
    Fajr: '04:43',
    Sunrise: '06:13',
    Dhuhr: '12:38',
    Asr: '16:14',
    Maghrib: '19:04',
    Isha: '20:23',
  },
  {
    id: 12,
    date: 'Apr 12',
    Fajr: '04:41',
    Sunrise: '06:12',
    Dhuhr: '12:38',
    Asr: '16:14',
    Maghrib: '19:04',
    Isha: '20:24',
  },
  {
    id: 13,
    date: 'Apr 13',
    Fajr: '04:40',
    Sunrise: '06:10',
    Dhuhr: '12:38',
    Asr: '16:14',
    Maghrib: '19:05',
    Isha: '20:25',
  },
  {
    id: 14,
    date: 'Apr 14',
    Fajr: '04:39',
    Sunrise: '06:09',
    Dhuhr: '12:37',
    Asr: '16:14',
    Maghrib: '19:06',
    Isha: '20:26',
  },
  {
    id: 15,
    date: 'Apr 15',
    Fajr: '04:37',
    Sunrise: '06:08',
    Dhuhr: '12:37',
    Asr: '16:14',
    Maghrib: '19:06',
    Isha: '20:27',
  },
  {
    id: 16,
    date: 'Apr 16',
    Fajr: '04:36',
    Sunrise: '06:07',
    Dhuhr: '12:37',
    Asr: '16:14',
    Maghrib: '19:07',
    Isha: '20:28',
  },
  {
    id: 17,
    date: 'Apr 17',
    Fajr: '04:34',
    Sunrise: '06:06',
    Dhuhr: '12:37',
    Asr: '16:14',
    Maghrib: '19:08',
    Isha: '20:29',
  },
  {
    id: 18,
    date: 'Apr 18',
    Fajr: '04:33',
    Sunrise: '06:04',
    Dhuhr: '12:36',
    Asr: '16:14',
    Maghrib: '19:09',
    Isha: '20:30',
  },
  {
    id: 19,
    date: 'Apr 19',
    Fajr: '04:31',
    Sunrise: '06:03',
    Dhuhr: '12:36',
    Asr: '16:14',
    Maghrib: '19:09',
    Isha: '20:31',
  },
  {
    id: 20,
    date: 'Apr 20',
    Fajr: '04:30',
    Sunrise: '06:02',
    Dhuhr: '12:36',
    Asr: '16:14',
    Maghrib: '19:10',
    Isha: '20:32',
  },
  {
    id: 21,
    date: 'Apr 21',
    Fajr: '04:29',
    Sunrise: '06:01',
    Dhuhr: '12:36',
    Asr: '16:14',
    Maghrib: '19:11',
    Isha: '20:33',
  },
  {
    id: 22,
    date: 'Apr 22',
    Fajr: '04:27',
    Sunrise: '06:00',
    Dhuhr: '12:35',
    Asr: '16:14',
    Maghrib: '19:11',
    Isha: '20:34',
  },
  {
    id: 23,
    date: 'Apr 23',
    Fajr: '04:26',
    Sunrise: '05:59',
    Dhuhr: '12:35',
    Asr: '16:14',
    Maghrib: '19:12',
    Isha: '20:34',
  },
  {
    id: 24,
    date: 'Apr 24',
    Fajr: '04:25',
    Sunrise: '05:58',
    Dhuhr: '12:35',
    Asr: '16:14',
    Maghrib: '19:13',
    Isha: '20:35',
  },
  {
    id: 25,
    date: 'Apr 25',
    Fajr: '04:23',
    Sunrise: '05:57',
    Dhuhr: '12:35',
    Asr: '16:14',
    Maghrib: '19:13',
    Isha: '20:36',
  },
  {
    id: 26,
    date: 'Apr 26',
    Fajr: '04:22',
    Sunrise: '05:56',
    Dhuhr: '12:35',
    Asr: '16:14',
    Maghrib: '19:14',
    Isha: '20:37',
  },
  {
    id: 27,
    date: 'Apr 27',
    Fajr: '04:21',
    Sunrise: '05:55',
    Dhuhr: '12:35',
    Asr: '16:14',
    Maghrib: '19:15',
    Isha: '20:38',
  },
  {
    id: 28,
    date: 'Apr 28',
    Fajr: '04:19',
    Sunrise: '05:54',
    Dhuhr: '12:34',
    Asr: '16:14',
    Maghrib: '19:16',
    Isha: '20:39',
  },
  {
    id: 29,
    date: 'Apr 29',
    Fajr: '04:18',
    Sunrise: '05:53',
    Dhuhr: '12:34',
    Asr: '16:14',
    Maghrib: '19:16',
    Isha: '20:40',
  },
];

const { flags } = meow({
  flags: {
    all: { type: 'boolean', alias: 'a' },
    iftar: { type: 'boolean', alias: 'i' },
    help: { type: 'boolean', alias: 'h' },
  },
});

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
  for (const key of data) {
    const fields = Object.values(key).splice(2);
    const row = {
      [key.id]: fields,
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
    const clear = chalkAnimation.rainbow(`left: ${maghrib}`);
    await sleep();
    clear.stop();
  });
}

const help = async () => {
  console.log(gradient('red', 'green', 'blue')('made with 💖 by someone'));
  const clear = chalkAnimation.rainbow(
    '\n\n-> npx ramadany (Show current time of iftar and adan) \n\n' +
      '-> npx ramadany --iftar (Show iftar time) \n\n' +
      '-> npx ramadany --all (Show all time of iftar and adan)  \n\n \n\n'
  );
  await sleep();
  clear.stop();
};

help();

// if (flags.iftar) {
//   main();
//   process.exit(0);
// }
// if (flags.help) {
//   help();
//   process.exit(0);
// }

// if (flags.all) {
//   allAdans();
//   process.exit(0);
// }

// currentAdan();
