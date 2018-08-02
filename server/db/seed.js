const User = require('./User');
const Mantra = require('./Mantra');
const Line = require('./Line');

const mantras = [
  {
    id: 1,
    name: 'Six Words'
  },
  {
    id: 2,
    name: 'All Shall Be Well'
  }
];

const lines = [
  {
    text: `Don't think about the past`,
    sequence: 1,
    mantraId: 1
  },
  {
    text: `Don't think about the future`,
    sequence: 2,
    mantraId: 1
  },
  {
    text: `Don't think about the present`,
    sequence: 3,
    mantraId: 1
  },
  {
    text: `Don't try to examine`,
    sequence: 4,
    mantraId: 1
  },
  {
    text: `Don't try to control`,
    sequence: 5,
    mantraId: 1
  },
  {
    text: `Relax and rest`,
    sequence: 6,
    mantraId: 1
  },
  {
    text: `All shall be well`,
    sequence: 1,
    mantraId: 2
  },
  {
    text: `And all shall be well`,
    sequence: 2,
    mantraId: 2
  },
  {
    text: `And every manner of thing shall be well`,
    sequence: 3,
    mantraId: 2
  },
];

const seed = () => {
  return Promise.all(mantras.map(mantra => Mantra.create(mantra)))
  .then(() => {
    return Promise.all(lines.map(line => Line.create(line)));
  });
};

module.exports = seed;
