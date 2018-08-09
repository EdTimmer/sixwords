const conn = require('./conn');
const { Sequelize } = conn;

const Line = conn.define('line', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  sequence: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Line;
