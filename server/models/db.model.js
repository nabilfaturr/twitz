import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("challenge", "root", "", {
  host: "localhost",
  port: "3308",
  dialect: "mysql",
  timezone: "+07:00",
});

export { sequelize, DataTypes };
