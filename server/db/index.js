const conn = require('./conn');
const User = require('./User');
const Mantra = require('./Mantra');
const Line = require('./Line');
const seed = require('./seed');

Line.belongsTo(Mantra, { onDelete: 'CASCADE' });
Mantra.hasMany(Line);

const syncAndSeed = () => {
  return conn.sync({ force: true })
    .then(() => seed())
    .catch(err => {
      throw err;
    });
};

module.exports = {
  syncAndSeed,
  models: {
    User,
    Mantra,
    Line
  }
};
