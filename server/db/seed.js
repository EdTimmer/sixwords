const User = require('./User');
const Mantra = require('./Mantra');
const Mandala = require('./Mandala');
// const Line = require('./Line');

const mantras = [
  {
    // id: 1,
    name: `Six Words`,
    description: `Tilopa's six words of advice`,
    lines: [
      `Don't think about the past`,
      `Don't think about the future`,
      `Don't think about the present`,
      `Don't try to examine`,
      `Don't try to control`,
      `Relax right now and rest`
    ]
  },
  {
    // id: 2,
    name: 'All Shall Be Well',
    description: `by Julian of Norwich`,
    lines: [
      `All shall be well`,
      `And all shall be well`,
      `And all manner of thing shall be well`
    ]
  }
];

const mandalas = [
  {
    // id: 1,
    name: 'Sri Yantra',
    description: '',
    imageURL: '/images/SriYantra.png',
  },
  {
    // id: 2,
    name: 'Shiva Shakti',
    description: '',
    imageURL: '/images/SivaSakti.jpg',
  }

]

const seed = () => {
  return Promise.all(mantras.map(mantra => Mantra.create(mantra)))
    .then(() => {
      return Promise.all(mandalas.map(mandala => Mandala.create(mandala)));
    });
};

module.exports = seed;
