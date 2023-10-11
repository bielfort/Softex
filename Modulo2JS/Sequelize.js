const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:");

try {
  sequelize.authenticate();
  console.log("Deu tudo certo!");
} catch (error) {
  console.error("Ops! Aconteceu algum erro!", error);
}