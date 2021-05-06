const { Song, Playlist, User } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, { id }) => {
      return User.findByPk(id);
    },

    songs: async (parent, { playlist_id }) => {
      const params = playlist_id ? { playlist_id } : {};
      return Song.findAll({
        where: params,
      });
    },

    playlists: async (parent, { pilot_id }) => {
      const params = pilot_id ? { pilot_id } : {};
      return Playlist.findAll({
        where: params,
      });
    },
  },
};

module.exports = resolvers;
