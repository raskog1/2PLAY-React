const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Playlist extends Model {}

Playlist.init(
  {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    // pilot: {
    //   type: DataTypes.STRING(64),
    //   allowNull: false,
    // },
    // copilot: {
    //   type: DataTypes.STRING(64),
    //   allowNull: false,
    // },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    pilot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    copilot_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "playlist",
  }
);

module.exports = Playlist;
