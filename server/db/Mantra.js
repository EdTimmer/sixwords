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
  lines: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: true
  }
});

module.exports = Mantra;
