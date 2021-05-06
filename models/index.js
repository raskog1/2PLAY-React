const User = require("./User");
const Playlist = require("./Playlist");
const Song = require("./Song");

User.hasMany(Playlist, {
  foreignKey: "pilot_id",
});

Playlist.belongsTo(User, {
  foreignKey: "pilot_id",
  foreignKey: "copilot_id",
});

Playlist.hasMany(Song, {
  foreignKey: "playlist_id",
  onDelete: "CASCADE",
});

Song.belongsTo(Playlist, {
  foreignKey: "playlist_id",
});

module.exports = { Playlist, Song, User };
