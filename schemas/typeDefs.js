// Import the gql tagged template function
const { gql } = require("apollo-server-express");

// Create our typeDefs
const typeDefs = gql`
  type User {
    id: ID
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Playlist {
    id: ID
    name: String
    completed: Boolean
    pilot_id: Int
    copilot_id: Int
  }

  type Song {
    id: ID
    artist: String
    title: String
    trackId: String
    pilot_rating: Int
    copilot_rating: Int
    avg_rating: Float
    playlist_id: Int
  }

  type Query {
    current: User
    user(id: ID!): User
    playlist(id: ID!): Playlist
    playlists(completed: Boolean): [Playlist]
    pilot_pl(id: ID!, completed: Boolean): [Playlist]
    copilot_pl(id: ID!, completed: Boolean): [Playlist]
    song(id: ID!): Song
    songs(playlist_id: Int): [Song]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addPlaylist(name: String!): Playlist
    completePlaylist(id: ID!): Playlist
    deletePlaylist(id: ID!): Playlist
    addSong(
      artist: String!
      title: String!
      trackId: String!
      playlist_id: Int!
    ): Song
  }
`;

// Export the typeDefs
module.exports = typeDefs;
