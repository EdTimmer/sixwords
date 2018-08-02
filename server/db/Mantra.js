const conn = require('./conn');
const { Sequelize } = conn;

const Mantra = conn.define('mantra', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING
  }
});

module.exports = Mantra;
