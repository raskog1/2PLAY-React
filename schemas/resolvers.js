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

    playlists: async (parent, args) => {
      const params = args ? { completed: args.completed } : {};
      return Playlist.findAll({
        where: params,
      });
    },

    pilot_pl: async (parent, { id, completed }) => {
      const params = completed ? { pilot_id: id, completed } : { pilot_id: id };
      return Playlist.findAll({
        where: params,
      });
    },

    copilot_pl: async (parent, { id, completed }) => {
      const params = completed
        ? { copilot_id: id, completed }
        : { copilot_id: id };
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
    addPlaylist: async (parent, { name }, context) => {
      const playlist = await Playlist.create({
        name,
        pilot_id: context.user.id,
      });
      return playlist;
    },
    completePlaylist: async (parent, { id }) => {
      const playlist = await Playlist.update(
        {
          completed: true,
        },
        {
          where: { id },
        }
      );
      return playlist;
    },
    deletePlaylist: async (parent, { id }) => {
      const playlist = await Playlist.destroy({ where: { id } });
      return playlist;
    },
    addSong: async (parent, args) => {
      const song = await Song.create(args);
      return song;
    },
  },
};

module.exports = resolvers;
