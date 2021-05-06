const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Song extends Model {}

Song.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    artist: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    trackId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pilot_rating: {
      type: DataTypes.DECIMAL(3, 2),
      default: null,
      validate: {
        max: 5,
        min: 0.5,
      },
    },
    copilot_rating: {
      type: DataTypes.DECIMAL(3, 2),
      default: null,
      validate: {
        max: 5,
        min: 0.5,
      },
    },
    avg_rating: {
      type: DataTypes.DECIMAL(3, 2),
      default: null,
      validate: {
        max: 5,
        min: 0.5,
      },
    },
    playlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "playlist",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "song",
  }
);

module.exports = Song;
