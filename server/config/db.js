const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("petfeed", "root", "b03b02019", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
