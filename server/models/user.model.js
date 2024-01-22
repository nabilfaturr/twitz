import { sequelize, DataTypes } from "./db.model.js";

const User = sequelize.define("user", {
  nama: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default User;
