const conn = require('./conn');
const { Sequelize } = conn;
// const KEY = process.env.JWT_KEY;
// const jwt = require('jwt-simple');

const User = conn.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  passwordPrompt: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});

//add authentication code
