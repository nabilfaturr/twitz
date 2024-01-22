import { sequelize, DataTypes } from "./db.model.js";

const Admin = sequelize.define("admin", {
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
});

async function syncTables() {
  try {
    await Admin.sync();
  } catch (error) {
    console.error("Error syncing tables: ", error);
  }
}

syncTables();

export default Admin;
