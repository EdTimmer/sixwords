const conn = require('./conn');
const { Sequelize } = conn;

const Mantra = conn.define('mantra', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  },
  textlines: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    // allowNull: false
  }
});

module.exports = Mantra;
