const conn = require('./conn');
const { Sequelize } = conn;

const Mantra = conn.define('mantra', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Mantra;
