const User = require("./User");
const Playlist = require("./Playlist");
const Song = require("./Song");

User.hasMany(Playlist, {
  foreignKey: "pilot",
  onDelete: "CASCADE",
});

Playlist.belongsTo(User, {});

Playlist.hasMany(Song, {
  onDelete: "CASCADE",
});

Song.belongsTo(Playlist, {});

module.exports = {
  Playlist: require("./Playlist"),
  Song: require("./Song"),
  User: require("./User"),
};
