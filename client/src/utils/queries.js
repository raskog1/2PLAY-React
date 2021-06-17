import gql from "graphql-tag";

export const GET_INCOMPLETE = gql`
  query incomplete($id: Number, $completed: Boolean) {
    playlists(id: $id, completed: false) {
      name
      completed
      pilot_id
    }
  }
`;
