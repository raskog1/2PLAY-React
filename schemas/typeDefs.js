// Import the gql tagged template function
const { gql } = require("apollo-server-express");

// Create our typeDefs
const typeDefs = gql`
  type User {
    id: ID
    username: String
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
    user(id: Int): User
    playlists(pilot_id: Int): [Playlist]
    songs(playlist_id: Int): [Song]
  }
`;

// Export the typeDefs
module.exports = typeDefs;
