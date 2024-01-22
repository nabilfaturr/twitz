import { sequelize, DataTypes } from "./db.model.js";
import User from "./user.model.js";

const Tweet = sequelize.define("tweet", {
  payload: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

User.hasMany(Tweet, { foreignKey: "userId" });
Tweet.belongsTo(User, { foreignKey: "userId" });

async function syncTables() {
  try {
    await User.sync();
    await Tweet.sync();
  } catch (error) {
    console.error("Error syncing tables: ", error);
  }
}

syncTables();

export default Tweet;
