const conn = require('./conn');
const { Sequelize } = conn;

const Mandala = conn.define('mandala', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});

module.exports = Mandala;
