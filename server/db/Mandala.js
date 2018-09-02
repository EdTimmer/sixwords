const conn = require('./conn');
const { Sequelize } = conn;

const Mandala = conn.define('mandala', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  imageURL: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});

module.exports = Mandala;
