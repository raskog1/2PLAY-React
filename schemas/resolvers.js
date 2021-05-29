const { Song, Playlist, User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    current: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findByPk(context.user.id);
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },

    user: async (parent, { id }) => {
      return User.findByPk(id);
    },

    song: async (parent, { id }) => {
      return Song.findByPk(id);
    },

    songs: async (parent, { playlist_id }) => {
      const params = playlist_id ? { playlist_id } : {};
      return Song.findAll({
        where: params,
      });
    },

    playlist: async (parent, { id }) => {
      return Playlist.findByPk(id);
    },

    playlists: async (parent, { pilot_id }) => {
      const params = pilot_id ? { pilot_id } : {};
      return Playlist.findAll({
        where: params,
      });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ where: { username } });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.checkPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
