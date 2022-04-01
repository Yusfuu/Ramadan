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
    Fajr: '04:38',
    Sunrise: '06:09',
    Dhuhr: '12:37',
    Asr: '16:14',
    Maghrib: '19:06',
    Isha: '20:26',
  },
  {
    id: 2,
    date: 'Apr 15',
    Fajr: '04:37',
    Sunrise: '06:08',
    Dhuhr: '12:37',
    Asr: '16:14',
    Maghrib: '19:07',
    Isha: '20:27',
  },
  {
    id: 3,
    date: 'Apr 16',
    Fajr: '04:35',
    Sunrise: '06:06',
    Dhuhr: '12:37',
    Asr: '16:14',
    Maghrib: '19:07',
    Isha: '20:28',
  },
  {
    id: 4,
    date: 'Apr 17',
    Fajr: '04:34',
    Sunrise: '06:05',
    Dhuhr: '12:37',
    Asr: '16:14',
    Maghrib: '19:08',
    Isha: '20:29',
  },
  {
    id: 5,
    date: 'Apr 18',
    Fajr: '04:33',
    Sunrise: '06:04',
    Dhuhr: '12:36',
    Asr: '16:14',
    Maghrib: '19:09',
    Isha: '20:30',
  },
  {
    id: 6,
    date: 'Apr 19',
    Fajr: '04:31',
    Sunrise: '06:03',
    Dhuhr: '12:36',
    Asr: '16:14',
    Maghrib: '19:09',
    Isha: '20:31',
  },
  {
    id: 7,
    date: 'Apr 20',
    Fajr: '04:30',
    Sunrise: '06:02',
    Dhuhr: '12:36',
    Asr: '16:14',
    Maghrib: '19:10',
    Isha: '20:32',
  },
  {
    id: 8,
    date: 'Apr 21',
    Fajr: '04:28',
    Sunrise: '06:01',
    Dhuhr: '12:36',
    Asr: '16:14',
    Maghrib: '19:11',
    Isha: '20:33',
  },
  {
    id: 9,
    date: 'Apr 22',
    Fajr: '04:27',
    Sunrise: '06:00',
    Dhuhr: '12:35',
    Asr: '16:14',
    Maghrib: '19:12',
    Isha: '20:34',
  },
  {
    id: 10,
    date: 'Apr 23',
    Fajr: '04:26',
    Sunrise: '05:59',
    Dhuhr: '12:35',
    Asr: '16:14',
    Maghrib: '19:12',
    Isha: '20:35',
  },
  {
    id: 11,
    date: 'Apr 24',
    Fajr: '04:24',
    Sunrise: '05:58',
    Dhuhr: '12:35',
    Asr: '16:14',
    Maghrib: '19:13',
    Isha: '20:36',
  },
  {
    id: 12,
    date: 'Apr 25',
    Fajr: '04:23',
    Sunrise: '05:56',
    Dhuhr: '12:35',
    Asr: '16:14',
    Maghrib: '19:14',
    Isha: '20:37',
  },
  {
    id: 13,
    date: 'Apr 26',
    Fajr: '04:22',
    Sunrise: '05:55',
    Dhuhr: '12:35',
    Asr: '16:14',
    Maghrib: '19:14',
    Isha: '20:38',
  },
  {
    id: 14,
    date: 'Apr 27',
    Fajr: '04:20',
    Sunrise: '05:54',
    Dhuhr: '12:35',
    Asr: '16:14',
    Maghrib: '19:15',
    Isha: '20:39',
  },
  {
    id: 15,
    date: 'Apr 28',
    Fajr: '04:19',
    Sunrise: '05:53',
    Dhuhr: '12:34',
    Asr: '16:14',
    Maghrib: '19:16',
    Isha: '20:40',
  },
  {
    id: 16,
    date: 'Apr 29',
    Fajr: '04:18',
    Sunrise: '05:52',
    Dhuhr: '12:34',
    Asr: '16:14',
    Maghrib: '19:17',
    Isha: '20:41',
  },
  {
    id: 17,
    date: 'Apr 30',
    Fajr: '04:16',
    Sunrise: '05:51',
    Dhuhr: '12:34',
    Asr: '16:14',
    Maghrib: '19:17',
    Isha: '20:42',
  },
  {
    id: 18,
    date: 'May 1',
    Fajr: '04:15',
    Sunrise: '05:50',
    Dhuhr: '12:34',
    Asr: '16:14',
    Maghrib: '19:18',
    Isha: '20:43',
  },
  {
    id: 19,
    date: 'May 2',
    Fajr: '04:14',
    Sunrise: '05:49',
    Dhuhr: '12:34',
    Asr: '16:14',
    Maghrib: '19:19',
    Isha: '20:43',
  },
  {
    id: 20,
    date: 'May 3',
    Fajr: '04:12',
    Sunrise: '05:49',
    Dhuhr: '12:34',
    Asr: '16:14',
    Maghrib: '19:19',
    Isha: '20:44',
  },
  {
    id: 21,
    date: 'May 4',
    Fajr: '04:11',
    Sunrise: '05:48',
    Dhuhr: '12:34',
    Asr: '16:14',
    Maghrib: '19:20',
    Isha: '20:45',
  },
  {
    id: 22,
    date: 'May 5',
    Fajr: '04:10',
    Sunrise: '05:47',
    Dhuhr: '12:34',
    Asr: '16:14',
    Maghrib: '19:21',
    Isha: '20:46',
  },
  {
    id: 23,
    date: 'May 6',
    Fajr: '04:09',
    Sunrise: '05:46',
    Dhuhr: '12:34',
    Asr: '16:14',
    Maghrib: '19:22',
    Isha: '20:47',
  },
  {
    id: 24,
    date: 'May 7',
    Fajr: '04:08',
    Sunrise: '05:45',
    Dhuhr: '12:33',
    Asr: '16:14',
    Maghrib: '19:22',
    Isha: '20:48',
  },
  {
    id: 25,
    date: 'May 8',
    Fajr: '04:06',
    Sunrise: '05:44',
    Dhuhr: '12:33',
    Asr: '16:14',
    Maghrib: '19:23',
    Isha: '20:49',
  },
  {
    id: 26,
    date: 'May 9',
    Fajr: '04:05',
    Sunrise: '05:43',
    Dhuhr: '12:33',
    Asr: '16:14',
    Maghrib: '19:24',
    Isha: '20:50',
  },
  {
    id: 27,
    date: 'May 10',
    Fajr: '04:04',
    Sunrise: '05:43',
    Dhuhr: '12:33',
    Asr: '16:14',
    Maghrib: '19:24',
    Isha: '20:51',
  },
  {
    id: 28,
    date: 'May 11',
    Fajr: '04:03',
    Sunrise: '05:42',
    Dhuhr: '12:33',
    Asr: '16:14',
    Maghrib: '19:25',
    Isha: '20:52',
  },
  {
    id: 29,
    date: 'May 12',
    Fajr: '04:02',
    Sunrise: '05:41',
    Dhuhr: '12:33',
    Asr: '16:14',
    Maghrib: '19:26',
    Isha: '20:53',
  },
  {
    id: 30,
    date: 'May 13',
    Fajr: '04:01',
    Sunrise: '05:40',
    Dhuhr: '12:33',
    Asr: '16:14',
    Maghrib: '19:27',
    Isha: '20:54',
  },
];

const { flags } = meow({
  flags: {
    all: { type: 'boolean', alias: 'a' },
    fotor: { type: 'boolean', alias: 'f' },
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
