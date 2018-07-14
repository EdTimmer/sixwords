const conn = require('./conn');
const { Sequelize } = conn;

const Line = conn.define('line', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  sequence: Sequelize.INTEGER
});

module.exports = Line;
