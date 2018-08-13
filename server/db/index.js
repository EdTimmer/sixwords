const conn = require('./conn');
const User = require('./User');
const Mantra = require('./Mantra');
const Mandala = require('./Mandala');
const seed = require('./seed');

// Line.belongsTo(Mantra, { onDelete: 'CASCADE' });
// Mantra.hasMany(Line);

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
    Mandala
  }
};
