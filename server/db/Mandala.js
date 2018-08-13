const conn = require('./conn');
const { Sequelize } = conn;

const Mandala = conn.define('mandala', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Mandala;
